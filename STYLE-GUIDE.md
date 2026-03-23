# Tokyo Manga Shelf — スタイルガイド

最終更新: 2026-03-23

このファイルは記事生成時のスタイル・フォーマット・トーンの定義です。
新しい記事を書くときはこのガイドに従ってください。

---

## 1. ブログのアイデンティティ

- **サイト名**: Tokyo Manga Shelf
- **ドメイン**: tokyomangashelf.com
- **コンセプト**: 日本人の視点から、英語圏の読者に向けてマンガを深掘りレビューする
- **差別化**: 西洋のレビューアーには書けない日本文化の文脈・行間・背景知識を提供する
- **言語**: 英語（一人称 "I" を使用、日本人読者としての視点）

---

## 2. 記事カテゴリ

| カテゴリ | 用途 | 例 |
|---------|------|-----|
| `Manga Review` | 個別作品のレビュー（メインコンテンツ） | Dandadan, Chainsaw Man |
| `Cultural Analysis` | 文化解説・ガイド記事 | ホラーマンガガイド、デモグラフィック解説 |
| `Manga Meme` | 話題の1コマ・ミーム化したパネルの文化的解説（ショート記事） | ルフィのドン顔、「だが断る」 |

---

## 3. フロントマター仕様

```yaml
---
title: '[創造的なタイトル]: [サブタイトル]'
description: '[SEO向け1-2文の魅力的な説明]'
pubDate: 'YYYY-MM-DD'
category: 'Manga Review'  # or 'Cultural Analysis'
tags: ['作品名', '作者名', 'デモグラフィック', 'ジャンル', ...]
affiliate: true  # Amazonリンクがある場合
rating: 9  # 1-10、レビュー記事のみ（リスト記事・文化記事は省略）
mangaAuthor: '作者名'  # 原作・作画が別の場合: '原作者 (story), 作画者 (art)'
mangaTitleJa: '日本語タイトル'
amazonASIN: 'ASIN番号'  # Amazon.com の Vol. 1
amazonTitle: '英語タイトル, Vol. 1'
---
```

### フロントマター注意点
- `title` にアポストロフィが含まれる場合はダブルクォートで囲む
- `description` にアポストロフィが含まれる場合はシングルクォートを2つ（`''`）でエスケープ
- `pubDate` は投稿日を分散させて自然な頻度に見せる（1日1本ペース）
- `tags` の先頭は作品名、次に作者名、その後にデモグラフィック・ジャンル

---

## 4. 文体・トーン

### 基本原則
- **Literary but accessible**: 文学的だが読みやすい。学術論文ではなく、知的なエッセイ
- **Personal and authoritative**: 「日本人として実体験を持つ語り手」の声。個人的なエピソードと文化的権威を両立
- **Conversational but intelligent**: 砕けすぎず、堅すぎず。カフェで知識豊富な友人と話しているような雰囲気
- **First-person Japanese perspective**: "I"を使い、日本での体験・記憶・文化的直感を織り交ぜる

### 文体のDo / Don't

| Do | Don't |
|----|-------|
| 意外な角度から切り込む | ありきたりな紹介文を書く |
| 日本語の概念を（ローマ字+漢字）で導入し、深く掘り下げる | 日本語を飾りとして散りばめるだけ |
| 「英語圏の読者が見落としがちな視点」を軸にする | 作品のあらすじを長々と説明する |
| 行間を読む — 作者が明示していないテーマを分析する | 表面的なプロット要約で終わる |
| 他の文化作品（映画、文学、音楽）と横断的に比較する | マンガの世界だけで閉じた議論にする |
| 具体的なシーン・パネルに言及して論を裏付ける | 抽象的な賛辞だけで終わる |
| 短い文と長い文をリズミカルに混ぜる | 同じ長さの文を連続させる |
| 段落冒頭に引き込むフックを置く | 平坦な説明から始める |

### 日本文化の扱い方
- 概念を紹介する際のパターン: **日本語（ローマ字 + 漢字）→ 直訳 → 実際の意味・ニュアンス → 作品への適用**
- 例: `"mujo" (無常) — literally "no permanence," but the concept carries...`
- 単なる翻訳ではなく、日本人がその概念をどう「体験」しているかを伝える
- 可能であれば、読者が自分の文化で対応する概念を想起できるよう対比を入れる

---

## 5. 記事構成

### レビュー記事の標準構成（2500-3500語）

1. **導入フック**（セクション見出し付き）
   - 作品の本質を突く意外な切り口で始める
   - 「この作品は○○ではない。実は○○だ」というリフレーミング
   - 既成概念への問いかけ

2. **ストーリー紹介**（ネタバレなし）
   - 2-3段落で核心だけ伝える
   - プロットではなく「この作品が問いかけている問い」を中心に

3. **文化分析セクション×2-3本**（記事の核心）
   - 各セクションに独自の切り口を持つ見出し
   - 日本文化の概念を深く掘り下げ、作品との接続を論証する
   - 個人的な体験や記憶を織り交ぜる

4. **アート/技法の分析**（該当する場合）
   - 作画の特徴を技術的に分析
   - 他の作家との比較で位置づける

5. **Who Should Read This / Verdict**
   - 「You will love this if...」「You might struggle if...」のリスト形式
   - **Rating: X/10** を太字で明記
   - 減点理由を具体的に1-2文で述べる

6. **クロージング**
   - 読者への問いかけでイタリック体で締める
   - コメント・議論を促す形

### セクション見出しのルール
- **ジェネリックな見出し禁止**: "The Story", "The Art", "Conclusion" はNG
- **各見出しがそれ自体で興味を引く一文であること**
- 例:
  - ✅ "Toast With Jam" / "The Day the Lines Stopped" / "Cherry Blossoms in the Gutter"
  - ❌ "Story Summary" / "Art Analysis" / "Final Thoughts"

---

## 6. SEO戦略

### タイトルのパターン
- `[作品名] Review: [意外な切り口のサブタイトル]`
- `[作品名]: [文化的テーマ] — [視点]`
- 70文字以内を目安にするが、魅力を優先

### Description
- 150-160文字目安
- 「A Japanese reader explains...」のフレーズで差別化を明示
- 読者の好奇心を刺激する具体的な内容を含める

### 狙うキーワード
- `{manga title} review`
- `{manga title} analysis`
- `{manga title} cultural meaning`
- `{manga title} Japanese perspective`

---

## 7. アフィリエイト

- Amazon Associates (US): tag `tokyomangashe-20`
- フロントマターの `amazonASIN` と `amazonTitle` を設定すれば自動でリンク生成
- `affiliate: true` を指定
- 本文中にアフィリエイトリンクのHTMLは書かない（テンプレートが処理）

---

## 8. 画像ルール

| 方法 | 可否 |
|------|------|
| Amazonアフィリエイトの商品画像（表紙） | ✅ OK（メインで使用） |
| 自分で撮影した本の写真 | ✅ OK |
| AIで生成したイメージ画像 | ✅ OK |
| 批評・解説目的でのコマ引用（Manga Meme記事、§10参照） | ✅ OK（Fair Use要件を満たすこと） |
| Kindleのスクリーンショット | ❌ NG |
| 漫画のコマを無断転載（批評なしでの掲載） | ❌ NG |

---

## 9. 品質チェックリスト

記事完成時に以下を確認:

- [ ] タイトルが創造的で、ジェネリックでないか
- [ ] 日本文化の概念を少なくとも2つ深く掘り下げているか
- [ ] 個人的な体験・記憶が含まれているか
- [ ] 「英語圏の読者が知らないこと」を教えているか
- [ ] ネタバレがないか（ストーリー紹介部分）
- [ ] フロントマターが仕様通りか（ASIN、タグ、rating）
- [ ] 2500-3500語の範囲か
- [ ] セクション見出しがすべて独自か
- [ ] クロージングに読者への問いかけがあるか

---

## 10. Manga Meme 記事（ショートフォーマット）

話題の1コマ・ミーム化したパネルを紹介し、「なぜこれが日本で面白いのか」を解説するショート記事。

### 10.1 トーン — "Deadpan Intellectual Comedy"

堀元見的なスタイルを英語で実現する。基本姿勢は「大真面目に馬鹿なことを分析する知識人」。

**核心原則:**
- **Serious framework, absurd subject**: 学術論文のような構造と語彙で、1枚のマンガのコマを分析する。そのギャップ自体が笑いになる
- **Never announce the joke**: 「これが面白いのは〜」と説明しない。真面目に分析しているうちに、読者が自分で笑いに到達する
- **Intellectual tangents that circle back**: 一見無関係な知識（言語学、歴史、社会学）に脱線し、最終的にそのコマの話に戻ってくる。脱線自体が価値を持つ
- **Understated self-awareness**: 自分がマンガの1コマに2000字費やしている事実を、直接ツッコまず、読者に気づかせる

**トーンの Do / Don't:**

| Do | Don't |
|----|-------|
| 大真面目な文体で荒唐無稽な分析をする | 「lol」「lmao」などのネットスラングを使う |
| 知的な脱線で読者を予想外の場所に連れていく | ジョークを説明する・笑いどころを指し示す |
| 1つの事実を3段階深掘りして「そこまでやるか」感を出す | 表面的な説明で終わる |
| ドライな一文で段落を締める（落語のオチのように） | 感嘆符で盛り上げようとする |
| 読者の「常識」を一度肯定してから覆す | 上から目線で「あなたたちは知らないでしょうが」と書く |
| 日本語の微妙なニュアンスを執拗に分解する | 日本語をエキゾチックな飾りとして使う |

**文体の例（英語）:**

> ❌ Bad: "This panel is hilarious because Luffy's face is so funny! Japanese fans love using it as a reaction image lol"

> ✅ Good: "There is a specific facial expression in Japanese internet culture that has no equivalent in any Western meme taxonomy. Linguists would call it a 'pragmatic marker of performative obviousness.' Japanese Twitter users call it 'the Luffy face.' Both descriptions are technically accurate, but only one of them has been retweeted forty million times."

> ✅ Good: "The phrase 'daga kotowaru' (だが断る) consists of exactly three words. It has been quoted more times than most PhD dissertations. This is either a failure of academia or a triumph of manga. I suspect it is both."

### 10.2 フロントマター仕様

```yaml
---
title: "Why Every Japanese Person Uses This One Piece Panel When Someone States the Obvious"
description: "The ''Dooon!'' reaction face from One Piece has become Japan''s universal response to Captain Obvious moments. A Japanese reader explains the cultural mechanics behind the meme."
pubDate: 'YYYY-MM-DD'
category: 'Manga Meme'
tags: ['作品名', '作者名', 'meme', 'internet culture', ...]
affiliate: true
mangaAuthor: '作者名'
mangaTitleJa: '日本語タイトル'
amazonASIN: 'ASIN番号'
amazonTitle: '英語タイトル, Vol. 1'
memeSource: '作品名, Chapter XX'        # コマの出典（話数）
memePublisher: 'Shueisha / VIZ Media'   # 出版社
memeCopyright: '© 作者名 / 出版社'       # 著作権表示
---
```

- `rating` は省略（作品評価ではないため）
- `memeSource`, `memePublisher`, `memeCopyright` はManga Meme記事で必須

### 10.3 記事構成（600〜1200語）

```
1. The Panel（画像 + 出典キャプション）
   - 冒頭に画像を配置
   - 画像直下に出典・著作権表示を必ず記載:
     From [作品名], Chapter [XX] by [作者名]. © [作者名] / [出版社].
     Used under fair use for commentary and criticism.
   - 画像がまだない場合は <!-- IMAGE: [説明] --> のプレースホルダーを置く

2. What You're Looking At（1-2段落）
   - このコマの場面を簡潔に説明（ネタバレ最小限）
   - ここで既にトーンを確立する — 真面目な導入で期待を裏切る一文を末尾に

3. Why Japan Can't Stop Using This（核心、2-3段落）
   - 日本のSNS・日常会話・LINEでどう使われているか
   - 具体的な使用シーンを2-3例（「上司がSlackで当たり前のことを言ったとき」等）
   - なぜこのコマが刺さるのか — 言語学・社会学・心理学の切り口で知的に脱線

4. The Part You're Missing（1-2段落）
   - 英語圏読者が見落としている日本語のニュアンス
   - 原文と翻訳の比較、擬音語・擬態語の解説
   - 「翻訳では伝わらない0.5秒の間（ま）」のような掘り下げ

5. How to Deploy This Like a Native（締め）
   - 「こう使うと日本人に見える」ガイド（ドライなトーンで）
   - Amazonリンクへの自然な導線
   - 最後の一文はドライな落とし — 読者が笑って記事を閉じるように
```

### 10.4 画像の合法運用ルール

**Fair Use（米国著作権法 17 U.S.C. § 107）の4要件を満たすこと:**

1. **目的**: 批評・解説（transformative use）であること
2. **著作物の性質**: 商業著作物だが批評は認められる
3. **使用量**: 作品全体のうち1コマのみ（ごく一部）
4. **市場影響**: 原作の代替にならない（むしろ購買促進）

**画像の入手方法（合法ルートのみ）:**

| 方法 | 可否 |
|------|------|
| 自分が購入した物理コミックのページを撮影 | ✅ OK（メイン手段） |
| 出版社が公式に公開しているプレビュー画像 | ✅ OK |
| 公式SNS投稿の埋め込み（X/Twitter embed等） | ✅ OK |
| スキャンサイト・海賊版サイトからの取得 | ❌ NG |
| Kindleスクリーンショット | ❌ NG |

**記事ごとの必須表記:**
- 画像直下に出典キャプション（作品名、話数、作者名、出版社）
- `© [作者名] / [出版社]. Used under fair use for commentary and criticism.`
- 1記事につき引用パネルは原則1枚（最大2枚）

**画像ファイルの配置:**
- `manga-blog/public/images/meme/` ディレクトリに格納
- ファイル名: `{slug}-panel.jpg`（例: `luffy-obvious-face-panel.jpg`）

### 10.5 SEO戦略

**タイトルのパターン:**
- `Why Japanese People Use This [作品名] Panel When [状況]`
- `The [作品名] Meme That Replaced an Entire Japanese Emotion`
- `[セリフの英訳]: The Manga Line That Became Japan's Favorite Comeback`

**狙うキーワード:**
- `{manga title} meme explained`
- `{manga title} {character} reaction meme`
- `Japanese manga memes meaning`
- `{specific phrase} manga origin`

### 10.6 品質チェックリスト（Manga Meme記事用）

- [ ] トーンが "deadpan intellectual comedy" になっているか（ふざけた文体ではなく、真面目な文体で面白いか）
- [ ] 知的な脱線が少なくとも1つ含まれているか
- [ ] 日本語のニュアンス分析が含まれているか
- [ ] 画像に出典・著作権表示があるか（Fair Use表記）
- [ ] 画像の入手元が合法ルートか
- [ ] 引用パネルが1記事あたり最大2枚以内か
- [ ] 600〜1200語の範囲か
- [ ] 最後の一文がドライなオチで終わっているか
- [ ] フロントマターに memeSource / memePublisher / memeCopyright があるか
