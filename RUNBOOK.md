# P4: マンガ＋読書記録ブログ RUNBOOK

## コンセプト
- マンガの読書記録を、日本人ならではの文化的視点でレビュー
- 英語圏・フランス語圏・ドイツ語圏・ポルトガル語圏・スペイン語圏向けに多言語展開
- 日本的な文脈での解釈を主軸に、自分なりの切り口を提示
- 一般書籍のレビューもカテゴリとして含む（旧読書ブログの統合）
- アフィリエイト＋ディスプレイ広告で収益化

## プラットフォーム
- **Cloudflare Pages**（Astroで構築、自前ドメイン）
- プロジェクトパス: `C:\Users\hirok\blogs\manga-blog\`
- 公開URL: https://tokyomangashelf.com
- GitHubリポジトリ: https://github.com/TOshirai-hiroki/manga-blog
- 記事数: 25本（レビュー・リスト記事・文化分析）
- Amazon Associates(US): 承認済み（tag: tokyomangashe-20）
- AdSense: 審査申請済み（ca-pub-2016529992214438）
- GA4: G-GRP2NZ3SYG
- スラッシュコマンド: `/manga-articles N` で記事一括作成可能

---

## 関連ドキュメント

- **`manga-blog/STYLE-GUIDE.md`** — 記事の文体・フォーマット・トーン定義
- **`manga-blog/ARTICLE-REGISTRY.md`** — 全記事一覧・重複防止・今後の候補
- **`/manga-articles`** — 記事一括作成コマンド（例: `/manga-articles 5`）

---

## 記事作成フロー

### Step 1: 読書メモを作成
`C:\Users\hirok\blogs\input\manga\YYYY-MM-DD\` にテンプレートに沿って記入：
- 作品名（日本語＋英語）
- 作者
- ジャンル
- あらすじ（ネタバレなし）
- 自分の感想・切り口
- 日本的な文化背景の解説ポイント
- ターゲット言語（例: en, fr）

### Step 2: Claude Codeで記事生成
1. 読書メモを読み取り
2. WebSearchで作品の背景情報をリサーチ
3. 英語で記事を直接生成（日本人視点の文化的深掘りを含む）
4. `manga-blog/src/content/blog/` に記事ファイルを配置
5. ユーザーが確認・編集
6. `cd manga-blog && npm run build` でビルド確認
7. git commit & push → Cloudflare Pages自動デプロイ（manga-blog/内で実行）

### Step 3: 確認
- デプロイ後にブログを確認
- 翻訳の自然さを確認（特にフランス語・ドイツ語）

---

## 画像ルール

| 方法 | 可否 |
|------|------|
| Amazonアフィリエイトの商品画像（表紙） | ✅ OK（メインで使用） |
| 自分で撮影した本の写真 | ✅ OK |
| AIで生成したイメージ画像 | ✅ OK |
| Kindleのスクリーンショット | ❌ NG |
| 漫画のコマをそのまま掲載 | ❌ NG |

---

## 多言語展開の段階

### Phase 1（Month 1-2）: 英語のみ
- まず英語レビューで記事を蓄積
- SEOの基盤を作る

### Phase 2（Month 3-4）: フランス語追加
- フランスは日本に次ぐ世界第2位のマンガ市場
- 英語記事を基にフランス語翻訳・アジャスト

### Phase 3（Month 5-8）: ドイツ語追加
- 欧州第3位のマンガ市場
- トラフィックが伸びていれば追加

### Phase 4（Month 9-12）: ポルトガル語・スペイン語
- ブラジル・スペイン語圏のマンガ需要に対応
- PVが月5万セッション以上なら追加検討

---

## 差別化ポイント
- **日本人読者の視点**: 西洋のレビューアーにはない文化的理解
- **日本的文脈での解釈**: 武士道、和の精神、日本社会の構造との関連
- **多言語対応**: 各文化圏に合わせたアジャスト（単純翻訳ではない）
- マンガだけでなく**一般書籍レビュー**も含む独自性

---

## カテゴリ
- **マンガレビュー**: メインコンテンツ
- **書籍レビュー**: 一般書籍の深掘りレビュー（旧読書ブログ統合）
- **文化解説**: マンガ・書籍の背景にある日本文化の解説記事

---

## 広告戦略

### Phase 1（Month 1-3）: 広告なし
- 記事の蓄積に専念（10本以上必要）

### Phase 2（Month 3-4）: Amazon Associate ✅完了
- Amazon Associates(US) 承認済み（tag: tokyomangashe-20）
- 全レビュー記事にAmazon.comアフィリエイトリンク（書影付き）設置済み
- 180日以内に3件の売上達成が必要（アカウント維持条件）

### Phase 3（Month 4〜）: AdSense申請 ✅申請済み
- AdSenseダッシュボードでサイト追加＆審査申請済み → 審査待ち

### Phase 4（Month 12〜）: Mediavine移行
- 月5万セッション達成時に申請（RPMが大幅に向上）

---

## 更新頻度
- 週2〜3本（まずは英語のみ）
- 多言語展開後は言語あたり週1本

---

## SEO戦略

### 狙うキーワード
- "{manga title} review"
- "{manga title} analysis"
- "{manga title} cultural meaning"
- "best manga {genre} {year}"
- "{著者名} manga recommendations"

### 強み
- 日本人の文化的視点はE-E-A-Tの「経験」「専門性」に直結
- 多言語展開で各言語圏のロングテールキーワードを獲得
- マンガのSEOは新刊が出るたびに検索需要が発生

---

## KPI
- 月間PV（言語別）
- Amazonアフィリエイト収益
- AdSense/Mediavine収益
- 記事投稿数: 月8〜12本目標
