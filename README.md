# 株式会社カマクラ電工 ホームページ

公開先は https://kamakuradenko.github.io/ 。`master` へ push すると GitHub Pages がビルドして公開する。この README はリポジトリ内の手順であり、`_config.yml` の `exclude` によりサイトには出さない。

## 公開しているページ

- `index.html` トップ（主な工事、お知らせ、会社情報、採用の案内）
- `company.html` 会社概要（会社情報、事業内容、アクセス）
- `works.html` 施工例の一覧（工事の種類、その他の電気工事の写真）
- `works/LowV.html` 低圧電気設備工事
- `works/HighV.html` 高圧受電設備工事
- `works/LED.html` LED更新工事
- `recruit.html` 採用情報（文面は原稿待ち。今は旧文面から右肩上がり・二班増の記述を除いたもの）
- `contact.html` お問い合わせ（電話・FAX・メール。GitHub Pages では PHP が動かないのでフォームは置かない）
- `404.html` 存在しない URL を開いたときのページ

## 見た目と共通部品

2026年10月にテンプレート（Template-Party）をやめ、デザインを作り直した。テンプレートの CSS・JS・画像は削除済み。

- `css/style.css` 全ページ共通のスタイル。色・角丸・幅は先頭の `:root` で変える。印刷用の指定も末尾にある
- `js/site.js` スマートフォンのメニュー開閉、施工写真の拡大表示、メールアドレスのコピー。動かない環境でもメニューは縦並びで出て、写真はリンク先で開ける
- `favicon.ico` `favicon.svg` `apple-touch-icon.png` ブラウザのタブやホーム画面のアイコン
- ロゴ `images/logo.png` は白文字の透過 PNG なので、紺色のヘッダーとフッターにだけ置いている

ヘッダー（メニュー・電話番号）とフッター（住所・電話・FAX）は各 HTML に同じものを書いている。メニューや電話番号を変えるときは、上の 9 ページすべてを直す。`works/` の 3 ページは `../` 付きのパス、`404.html` は `/` から始まるパスで書いている。

トップへのリンクは `./` ではなく `index.html`（`works/` からは `../index.html`）と書く。`./` だと、HTML をブラウザで直接開いて確認するときにトップではなくフォルダの一覧が出る。`404.html` は公開サイト上でだけ正しく表示される。

## よくある更新

お知らせを足すときは、`index.html` の `news-list` の先頭に 1 行足し、`NEW` の印（`news-badge`）を新しい行へ移す。

施工写真を足すときは、写真を長辺 1600px 程度に縮めて `images/seko/` の該当フォルダに置き、そのページの `gallery` に次の形で 1 枚分を足す。`width` と `height` は写真の実寸を書く。工事前と工事後を並べるときは `works/LowV.html` の `ba` のかたまりを写して使う。

```html
<figure class="photo"><a class="zoom" href="../images/seko/低圧電気設備工事/写真名.JPG"><img src="../images/seko/低圧電気設備工事/写真名.JPG" alt="写真の説明" width="1600" height="1200" loading="lazy"></a><figcaption>写真の説明</figcaption></figure>
```

一覧ページのカードにある「写真13枚を見る」などの枚数も合わせて直す。

## リポジトリから削除したもの

動かないフォームと、本文が「工事中」だったページ。

- `form.html` `confirm.html` `finish.html` `form.php`
- `d_contact.html`（テンプレートの見本）
- `works/works2.html`
- `link.html`（リンク集。メニューからも外していた）

リニューアルで使わなくなったテンプレートの残りも削除した。

- `css/slide.css` `css/print.css` `js/openclose.js`
- `images/icon.png` `images/icon_menu.png`（メニューのアイコン）、SNS 用アイコン 4 つ
- `images/1.jpg` `2.jpg` `3.jpg` `_1.jpg` `_2.jpg` `_3.jpg`（旧スライド）、`images/sample1.jpg` などの見本画像
- `images/logo_.png` と `base/logo.png`（テンプレートの見本ロゴ）

## ビルドから外しているファイル

ファイルはリポジトリに残している。

- バッテリー事業の写真：`images/seko/583043.jpg` から `583050.jpg`、`images/seko/バッテリー修理/`
- `images/logo__.png`：オレンジの電球と歯車の「カマクラ電工」ロゴ案。今のロゴとは別で、どのページでも使っていない

## 写真の容量

JPEG は長辺 1600px、品質 80 で保存し直した。`images` 配下は約 116MB から約 9MB。再保存に伴い、撮影位置などの Exif は残らない。

## いまの文面で確認済みのこと

- バッテリー事業は撤退済み。会社概要は「撤退しました」。施工例からは外した
- 売上高と従業員数は会社概要の表記のまま
- SNS アイコンは外した
- 採用は募集継続。本文は原稿が届いてから差し替える
- リニューアル時に足した文面（トップの紹介文、事業内容の「引込線工事」、お問い合わせページの「ご連絡の際は」）と、お知らせの整理（2022年の制作メモ 3 件を外した）は了承済み
- リニューアル時に初めて載せた写真（`images/seko/583052.jpg` `583053.jpg` `583054.jpg`、`images/seko/低圧電気設備工事/計器傾斜改修後.JPG`）は了承済み
- メールアドレスは「☆を@に」表記をやめ、そのまま表示する

## 残っている確認

- お知らせの「2023.12 代表取締役が交代しました。」の日付（日にちが分からないので月まで）
- 売上高 100,000,000円、従業員数 5名が今の数字か
- `images/logo__.png`（ロゴ案）を残すか削除するか

## 更新の出し方

通常は `master` へ push する。ビルドだけやり直すときは GitHub の Actions で「Page build and deployment」を開き、右上の Re-run all jobs を押す。

`/sitemap.xml` は `jekyll-sitemap` がビルド時に作る。手書きの `sitemap.xml` は置かない。Search Console 用の `google421b7cae58fe3ffa.html` は公開したまま、サイトマップからは外している。`404.html` もサイトマップから外している。
