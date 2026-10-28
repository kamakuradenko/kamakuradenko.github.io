/*
 * 株式会社カマクラ電工 サイト共通スクリプト
 * ・スマートフォン表示のメニュー開閉
 * ・施工写真の拡大表示（a.zoom をクリックしたとき）
 * ・メールアドレスのコピー（data-copy を持つボタン）
 * スクリプトが動かなくても、メニューは縦並びで表示され、写真はリンク先で開ける。
 */
(function () {
	'use strict';

	var root = document.documentElement;

	/* メニュー開閉 */
	var menuButton = document.querySelector('.menu-button');
	var nav = document.getElementById('site-nav');

	if (menuButton && nav) {
		var setMenu = function (open) {
			menuButton.setAttribute('aria-expanded', String(open));
			menuButton.querySelector('.menu-label').textContent = open ? '閉じる' : 'メニュー';
			root.classList.toggle('menu-open', open);
		};

		menuButton.addEventListener('click', function () {
			setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
		});

		nav.addEventListener('click', function (event) {
			if (event.target.closest('a')) setMenu(false);
		});

		document.addEventListener('click', function (event) {
			if (root.classList.contains('menu-open') && !event.target.closest('.site-header')) setMenu(false);
		});

		document.addEventListener('keydown', function (event) {
			if (event.key === 'Escape' && root.classList.contains('menu-open')) {
				setMenu(false);
				menuButton.focus();
			}
		});

		var wide = window.matchMedia('(min-width: 960px)');
		var closeOnWide = function () {
			if (wide.matches) setMenu(false);
		};
		if (wide.addEventListener) wide.addEventListener('change', closeOnWide);
		else if (wide.addListener) wide.addListener(closeOnWide);
	}

	/* 施工写真の拡大表示 */
	var zoomLinks = Array.prototype.slice.call(document.querySelectorAll('a.zoom'));

	if (zoomLinks.length && typeof HTMLDialogElement === 'function') {
		var viewer = buildViewer();
		var viewerImg = viewer.querySelector('.viewer-img');
		var viewerCaption = viewer.querySelector('.viewer-caption');
		var viewerCount = viewer.querySelector('.viewer-count');
		var many = zoomLinks.length > 1;
		var current = 0;

		viewer.classList.toggle('is-single', !many);

		var show = function (index) {
			current = (index + zoomLinks.length) % zoomLinks.length;
			var link = zoomLinks[current];
			var thumb = link.querySelector('img');
			var text = link.getAttribute('data-caption') || (thumb ? thumb.alt : '');
			viewerImg.src = link.href;
			viewerImg.alt = text;
			viewerCaption.textContent = text;
			viewerCount.textContent = many ? (current + 1) + ' / ' + zoomLinks.length : '';
		};

		zoomLinks.forEach(function (link, index) {
			link.addEventListener('click', function (event) {
				event.preventDefault();
				show(index);
				viewer.showModal();
			});
		});

		viewer.querySelector('.viewer-close').addEventListener('click', function () {
			viewer.close();
		});
		viewer.querySelector('.viewer-prev').addEventListener('click', function () {
			show(current - 1);
		});
		viewer.querySelector('.viewer-next').addEventListener('click', function () {
			show(current + 1);
		});

		viewer.addEventListener('click', function (event) {
			if (event.target === viewer || event.target.classList.contains('viewer-stage')) viewer.close();
		});

		viewer.addEventListener('keydown', function (event) {
			if (!many) return;
			if (event.key === 'ArrowLeft') {
				event.preventDefault();
				show(current - 1);
			} else if (event.key === 'ArrowRight') {
				event.preventDefault();
				show(current + 1);
			}
		});

		viewer.addEventListener('close', function () {
			viewerImg.removeAttribute('src');
			zoomLinks[current].focus();
		});
	}

	function icon(path) {
		return '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + path + '</svg>';
	}

	function buildViewer() {
		var dialog = document.createElement('dialog');
		dialog.className = 'viewer';
		dialog.setAttribute('aria-label', '施工写真の拡大表示');
		dialog.innerHTML =
			'<div class="viewer-stage">' +
				'<figure class="viewer-figure">' +
					'<img class="viewer-img" alt="">' +
					'<figcaption class="viewer-caption"></figcaption>' +
				'</figure>' +
				'<p class="viewer-count"></p>' +
				'<button type="button" class="viewer-btn viewer-close" aria-label="閉じる">' + icon('<path d="M6 6l12 12M18 6 6 18"/>') + '</button>' +
				'<button type="button" class="viewer-btn viewer-prev" aria-label="前の写真">' + icon('<path d="M15 5l-7 7 7 7"/>') + '</button>' +
				'<button type="button" class="viewer-btn viewer-next" aria-label="次の写真">' + icon('<path d="M9 5l7 7-7 7"/>') + '</button>' +
			'</div>';
		document.body.appendChild(dialog);
		return dialog;
	}

	/* メールアドレスのコピー */
	Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), function (button) {
		var label = button.querySelector('.copy-label');
		var original = label.textContent;
		var timer;

		button.hidden = false;
		button.addEventListener('click', function () {
			var text = button.getAttribute('data-copy');
			var done = function () {
				label.textContent = 'コピーしました';
				clearTimeout(timer);
				timer = setTimeout(function () {
					label.textContent = original;
				}, 2500);
			};

			if (navigator.clipboard && window.isSecureContext) {
				navigator.clipboard.writeText(text).then(done, function () {
					if (copyByTextarea(text)) done();
				});
			} else if (copyByTextarea(text)) {
				done();
			}
		});
	});

	function copyByTextarea(text) {
		var area = document.createElement('textarea');
		var ok = false;
		area.value = text;
		area.setAttribute('readonly', '');
		area.style.position = 'fixed';
		area.style.top = '0';
		area.style.opacity = '0';
		document.body.appendChild(area);
		area.select();
		try {
			ok = document.execCommand('copy');
		} catch (error) {
			ok = false;
		}
		document.body.removeChild(area);
		return ok;
	}
})();
