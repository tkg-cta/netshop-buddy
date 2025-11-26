# NetShop Buddy

初めてでも安心。BASEで作る、はじめてのネットショップ開設サービス。

## 概要

このプロジェクトは、FLOCSS(Foundation, Layout, Object)形式で構成されたHTML/SCSS/JavaScriptの静的サイトです。

## ファイル構成

```
netshop-buddy/
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css          # コンパイル済みCSS
└── src/
    └── assets/
        ├── scss/          # FLOCSS構造のSCSSファイル
        │   ├── foundation/
        │   ├── layout/
        │   ├── object/
        │   │   ├── component/
        │   │   ├── project/
        │   │   └── utility/
        │   └── style.scss
        └── js/            # JavaScriptモジュール
            ├── main.js
            ├── header.js
            ├── plan-configurator.js
            └── utils.js
```

## 開発

### SCSSのコンパイル

開発時にSCSSを自動的にコンパイルするには:

```bash
sass src/assets/scss/style.scss css/style.css --style=compressed --watch
```

### ローカルでの確認

`index.html`をブラウザで直接開くか、ローカルサーバーを起動:

```bash
# Pythonを使用する場合
python -m http.server 8000

# Node.jsのhttp-serverを使用する場合
npx http-server
```

## FLOCSS構造

### Foundation Layer
- 変数、リセット、ベーススタイル、アニメーション

### Layout Layer
- ヘッダー、フッター、メインレイアウト

### Object Layer
- **Component**: 再利用可能なコンポーネント(ボタン、カード、バッジ、フォーム)
- **Project**: プロジェクト固有のスタイル(ヒーロー、紹介、サービス、プラン、コンタクト)
- **Utility**: ユーティリティクラス(シャドウ、スペーシング、テキスト)

## 機能

- ✅ レスポンシブデザイン
- ✅ スムーズスクロール
- ✅ 固定ヘッダー(スクロール時に変化)
- ✅ インタラクティブなプラン選択
- ✅ CSSアニメーション
- ✅ セマンティックHTML

## ブラウザサポート

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## ライセンス

このプロジェクトはデモ用です。
