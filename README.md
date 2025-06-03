# TakapBlog v3

このリポジトリは、Next.js（App Router）とTypeScriptで構築された個人ブログ「TakapBlog v3」です。

## 主な機能

- Next.js App Router構成
- TypeScriptによる型安全な実装
- Contentfulを利用したヘッドレスCMS連携
- Tailwind CSSによるスタイリング
- ブログ記事のタグ・ページング・目次・OGP画像自動生成
- Mermaid.jsによるダイアグラム描画
- レスポンシブ対応

## セットアップ方法

1. 必要なパッケージをインストール

```bash
npm install
```

2. Contentfulや認証用の環境変数を`.env.local`に設定

```
CONTENTFUL_SPACE_ID=xxx
CONTENTFUL_ACCESS_TOKEN=xxx
NEXTAUTH_URL=http://localhost:3000
# その他必要な環境変数
```

3. 開発サーバーを起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて動作を確認してください。

## ディレクトリ構成

- `src/app/` ... ルーティング・ページ・APIエンドポイント
- `src/components/` ... UIコンポーネント
- `src/lib/` ... 認証・Contentfulクライアント等のライブラリ
- `src/types/` ... 型定義

## デプロイ

Vercel等のプラットフォームで簡単にデプロイできます。

## ライセンス

MIT License
