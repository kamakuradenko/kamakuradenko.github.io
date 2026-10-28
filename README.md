# 株式会社カマクラ電工 ホームページ

公開先は https://kamakuradenko.github.io/ 。`master` へ push すると GitHub Pages がビルドして公開する。この README はリポジトリ内の手順であり、`_config.yml` の `exclude` によりサイトには出さない。

## 公開しているページ

- `index.html` トップ（事業案内、更新履歴、スライド）
- `company.html` 会社概要
- `works.html` 施工例
- `works/LowV.html` 低圧電気設備工事
- `works/HighV.html` 高圧受電設備工事
- `works/LED.html` LED更新工事
- `recruit.html` 採用情報（文面は 2024年2月のまま。差し替え原稿待ち）

問い合わせはメニューの mailto（`kd231123@gmail.com`）。GitHub Pages では PHP は動かない。

## リポジトリから削除したもの

動かないフォームと、本文が「工事中」だったページ。

- `form.html` `confirm.html` `finish.html` `form.php`
- `d_contact.html`（テンプレートの見本）
- `works/works2.html`
- `link.html`（リンク集。メニューからも外していた）

## ビルドから外している画像

ファイルは残している。バッテリー事業の写真と、テンプレート由来の未使用画像。

- `images/seko/583043.jpg` から `583050.jpg`（蓄電池・リフト・高所作業車の蓄電池）
- `images/seko/バッテリー修理/`
- `images/sample1.jpg` などテンプレート画像、`images/_1.jpg` など旧スライド、`images/logo_.png` `images/logo__.png`
- SNS 用アイコン（ページからは外した）

電気工事の写真 `images/seko/583052.jpg` `583053.jpg` `583054.jpg` と `images/seko/低圧電気設備工事/計器傾斜改修後.JPG` はページ未使用のまま残している。

## 写真の容量

JPEG は長辺 1600px、品質 80 で保存し直した。`images` 配下は約 116MB から約 9MB。再保存に伴い、撮影位置などのExifは残らない。

## いまの文面で確認済みのこと

- バッテリー事業は撤退済み。会社概要は「撤退しました」。施工例からは外した
- トップの案内は、所在地・電気設備工事・電話・FAX・メール。売上高と従業員数は会社概要の表記のまま
- SNS アイコンは外した
- 採用は募集継続。本文は原稿が届いてから差し替える

## 残っている確認

- What's New の「2023/12/-- 代表取締役交代」の日付
- 売上高 100,000,000円、従業員数 5名が今の数字か

## 更新の出し方

通常は `master` へ push する。ビルドだけやり直すときは GitHub の Actions で「Page build and deployment」を開き、右上の Re-run all jobs を押す。

`/sitemap.xml` は `jekyll-sitemap` がビルド時に作る。手書きの `sitemap.xml` は置かない。Search Console 用の `google421b7cae58fe3ffa.html` は公開したまま、サイトマップからは外している。
