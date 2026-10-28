# 株式会社カマクラ電工 ホームページ

公開先は https://kamakuradenko.github.io/ 。`master` へ push すると GitHub Pages がビルドして公開する。この README はリポジトリ内の手順であり、`_config.yml` の `exclude` によりサイトには出さない。

## 公開しているページ

- `index.html` トップ（更新履歴とスライド）
- `company.html` 会社概要
- `works.html` 施工例
- `works/LowV.html` 低圧電気設備工事
- `works/HighV.html` 高圧受電設備工事
- `works/LED.html` LED更新工事
- `recruit.html` 採用情報
- `link.html` リンク（メニューには出していない）

問い合わせはメニューの mailto（`kd231123@gmail.com`）。GitHub Pages では PHP は動かない。

## リポジトリに残しているが公開しない

`_config.yml` の `exclude` に入れてある。ファイルは削除していない。

- `form.html` `confirm.html` `finish.html` `form.php`（自動フォーム。送信処理は動かない）
- `d_contact.html`（テンプレートの見本ページ）
- `works/works2.html`（本文が「工事中」）

`/sitemap.xml` は `jekyll-sitemap` がビルド時に作る。手書きの `sitemap.xml` は置かない。Search Console 用の `google421b7cae58fe3ffa.html` は公開したまま、サイトマップからは外している。

## 済んでいること

- ロゴは `images/logo.png`（回路模様と社名）を公開中。下書き `logo_.png` `logo__.png` は未使用のまま残る
- 会社概要から、取り消し線だった旧携帯・旧バッテリー工場・バッテリーの販売と買取の文を外した
- 各ページのロゴ alt を「カマクラ電工」にそろえた（見本ページ `d_contact.html` を除く）
- 会社概要・施工例・採用で、開いているページにメニューの現在位置が付くようにした
- LED 詳細のキャプションを写真に合わせた

## 残作業（事実の確認が必要）

- バッテリーは「撤退予定」の一文と、施工例ページの写真が残っている。撤退済みか、継続か
- 採用文面は 2024年2月のまま。募集を続けるなら数字と体制、止めるならページを閉じる
- 売上高・従業員数が今の数字か
- What's New の「2023/12/-- 代表取締役交代」の日付
- SNS アイコンはリンク先が `#` のまま。アカウントが無ければ外す
- `link.html` を残すか、公開から外すか
- 施工写真が重い（`images` 配下 約116MB、1枚数MB）。圧縮してよいか
- トップに事業・所在地・連絡先の説明がまだない

## 更新の出し方

通常は `master` へ push する。ビルドだけやり直すときは GitHub の Actions で「Page build and deployment」を開き、右上の Re-run all jobs を押す。
