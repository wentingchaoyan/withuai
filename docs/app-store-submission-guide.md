# WithU アプリストア申請ガイド

最終更新日: 2025年1月8日

---

## 目次

1. [App Store Connect（iOS）](#1-app-store-connectios)
2. [Google Play Console（Android）](#2-google-play-consoleandroid)
3. [共通メタデータ](#3-共通メタデータ)
4. [審査対応](#4-審査対応)

---

## 1. App Store Connect（iOS）

### 1.1 App Privacy Details（プライバシーラベル）

#### 収集するデータの種類

| カテゴリ | データタイプ | 収集する | ユーザーに紐付け | トラッキング使用 |
|---------|-------------|---------|-----------------|-----------------|
| Contact Info | Email Address | ✅ Yes | ✅ Yes | ❌ No |
| Health & Fitness | Health | ✅ Yes | ✅ Yes | ❌ No |
| User Content | Photos or Videos | ✅ Yes | ✅ Yes | ❌ No |
| User Content | Other User Content | ✅ Yes | ✅ Yes | ❌ No |
| Identifiers | User ID | ✅ Yes | ✅ Yes | ❌ No |
| Identifiers | Device ID | ✅ Yes | ✅ Yes | ❌ No |
| Usage Data | Product Interaction | ✅ Yes | ✅ Yes | ❌ No |
| Diagnostics | Crash Data | ✅ Yes | ✅ Yes | ❌ No |
| Diagnostics | Performance Data | ✅ Yes | ✅ Yes | ❌ No |

**注意**: Health データには以下が含まれます（すべて任意入力）：
- アレルギー情報、既往歴、合併症
- 身体測定データ（身長、体重）
- 出生時情報（在胎週数、出生体重等）
- 発達マイルストーン

#### 各データの利用目的

| データタイプ | 利用目的 |
|-------------|---------|
| Email Address | App Functionality |
| Health | App Functionality |
| Photos or Videos | App Functionality |
| Other User Content | App Functionality |
| User ID | App Functionality |
| Device ID | Analytics, App Functionality |
| Product Interaction | Analytics |
| Crash Data | App Functionality |
| Performance Data | App Functionality |

#### 入力時の回答例

**Q: Do you or your third-party partners collect data from this app?**
- A: Yes

**Q: Is this data linked to the user's identity?**
- A: Yes

**Q: Is this data used for tracking purposes?**
- A: No

**Q: Do you or your third-party partners use data for tracking?**
- A: No

---

### 1.2 App Information

| 項目 | 入力内容 |
|------|---------|
| Privacy Policy URL | https://withuai.com/en/privacy-en.html |
| Terms of Service URL (任意) | https://withuai.com/en/terms-en.html |
| Support URL | https://withuai.com/support |
| Marketing URL (任意) | https://withuai.com |

---

### 1.3 Age Rating

#### Content Descriptions

| 項目 | 回答 |
|------|------|
| Cartoon or Fantasy Violence | None |
| Realistic Violence | None |
| Prolonged Graphic or Sadistic Realistic Violence | None |
| Profanity or Crude Humor | None |
| Mature/Suggestive Themes | None |
| Horror/Fear Themes | None |
| Medical/Treatment Information | Infrequent/Mild |
| Alcohol, Tobacco, or Drug Use or References | None |
| Simulated Gambling | None |
| Sexual Content or Nudity | None |
| Unrestricted Web Access | None |
| Gambling with Real Currency | None |

**推奨Age Rating: 4+**

#### 追加質問

**Q: Is this app designed primarily for kids?**
- A: No（保護者向けアプリのため）

**Q: Does this app contain age-gating?**
- A: No（必要に応じてYesに変更可）

---

### 1.4 App Review Information

#### Demo Account（必須）

```
Email: demo@withuai.com
Password: [審査用パスワード]
```

※事前にデモアカウントを作成し、サンプルデータ（子供のプロフィール、発達記録、動画分析結果）を登録しておく

#### App Review Notes

```
【App Overview】
WithU is a child development tracking app designed for PARENTS and caregivers.
Children do not directly use this app. Parents use the app to record and track
their children's developmental milestones.

【Demo Account】
Email: demo@withuai.com
Password: [パスワード]

This demo account is pre-populated with:
- Sample child profile (age 18 months)
- Development milestone records
- Sample video analysis results
- AI-generated developmental suggestions

【AI Features Explanation】
This app uses AI for the following features:

1. Video Analysis (MediaPipe)
   - Analyzes child movement patterns from uploaded videos
   - Processing is done ON-DEVICE (videos are not sent to external servers)
   - Results show posture and movement assessments

2. Developmental Suggestions (LLM)
   - Provides general developmental guidance based on recorded milestones
   - All suggestions are clearly labeled as reference information
   - Users are advised to consult healthcare professionals

【Important Disclaimers】
- This app is NOT a medical device
- AI analysis results do not replace professional medical diagnosis
- Users are encouraged to consult pediatricians for any concerns

【Data Handling】
- All user data is encrypted in transit (TLS) and at rest
- Users can delete their account and all associated data from Settings
- We do not sell personal information
- Children's videos are stored securely on Supabase (US servers)

【Third-Party SDKs】
- Firebase Crashlytics: Crash reporting
- Firebase Analytics: Usage analytics
- Supabase: Authentication, database, storage
- Expo: App framework
- MediaPipe: On-device video analysis

【Contact】
For any questions during review: admin@withuai.com
```

---

## 2. Google Play Console（Android）

### 2.1 Data Safety Section

#### Data Collection

| データタイプ | 収集 | 共有 | 必須 | 目的 |
|-------------|-----|-----|-----|------|
| Email address | ✅ | ❌ | ✅ | App functionality |
| User IDs | ✅ | ❌ | ✅ | App functionality |
| Health info | ✅ | ❌ | ❌ | App functionality |
| Photos | ✅ | ❌ | ❌ | App functionality |
| Videos | ✅ | ❌ | ❌ | App functionality |
| Other user-generated content | ✅ | ❌ | ❌ | App functionality |
| Crash logs | ✅ | ❌ | ✅ | Analytics |
| Diagnostics | ✅ | ❌ | ✅ | Analytics |
| App interactions | ✅ | ❌ | ✅ | Analytics |
| Device or other IDs | ✅ | ❌ | ✅ | Analytics |

**注意**: Health info には以下が含まれます（すべて任意入力）：
- アレルギー情報、既往歴、合併症
- 身体測定データ（身長、体重）
- 出生時情報（在胎週数、出生体重等）

#### Security Practices

| 項目 | 回答 |
|------|------|
| Data is encrypted in transit | ✅ Yes |
| You provide a way for users to request that their data be deleted | ✅ Yes |
| Data is transferred to a third party | ✅ Yes (Firebase, Supabase) |

#### 入力時の回答

**Q: Does your app collect or share any of the required user data types?**
- A: Yes

**Q: Is all of the user data collected by your app encrypted in transit?**
- A: Yes

**Q: Do you provide a way for users to request that their data be deleted?**
- A: Yes

---

### 2.2 App Content

#### Target Audience

| 項目 | 選択 |
|------|------|
| Target age group | 18 and over |
| Appeal to children | No |

**重要**: 「Designed for Families」プログラムには申請しない

#### App Category

| 項目 | 選択 |
|------|------|
| Application type | App |
| Category | Parenting |
| Tags | Baby, Child Development, Family |

---

### 2.3 Store Listing

#### Contact Details

| 項目 | 入力内容 |
|------|---------|
| Email | admin@withuai.com |
| Phone (任意) | - |
| Website | https://withuai.com |

#### Privacy Policy

| 項目 | 入力内容 |
|------|---------|
| Privacy Policy URL | https://withuai.com/en/privacy-en.html |

---

### 2.4 App Access（審査用）

```
Instructions for reviewer:

Demo Account:
Email: demo@withuai.com
Password: [審査用パスワード]

This account contains sample data including:
- Child profile with developmental records
- Video analysis results
- AI-generated suggestions

Note: This app is designed for parents/caregivers to track
their children's development. Children do not use this app directly.
```

---

## 3. 共通メタデータ

### 3.1 アプリ説明文

#### 短い説明（80文字以内）

**日本語:**
```
お子様の発達をAIで記録・分析。保護者のための発達支援アプリ
```

**English:**
```
Track your child's development with AI analysis. A developmental support app for parents.
```

#### 詳細説明

**日本語:**
```
WithUは、保護者がお子様の発達を記録・追跡するためのアプリです。

【主な機能】
• 発達マイルストーンの記録と追跡
• 動画によるAI姿勢・動作分析
• AIによる発達アドバイスの提供
• 成長記録のカレンダー表示
• 月次発達レポートの作成

【AI分析機能】
お子様の動画をアップロードすると、AIが姿勢や動作パターンを分析。
発達の参考情報を提供します。
※AI分析結果は参考情報であり、医療診断を代替するものではありません。

【安心のプライバシー保護】
• データは暗号化して安全に保存
• 第三者への個人情報販売は行いません
• アカウント削除でデータを完全消去可能

【対象ユーザー】
本アプリは保護者・養育者向けです。お子様が直接操作することは想定していません。

【ご注意】
本アプリは医療機器ではありません。お子様の発達に関する懸念がある場合は、
医療専門家にご相談ください。
```

**English:**
```
WithU is an app for parents to record and track their children's development.

【Key Features】
• Record and track developmental milestones
• AI-powered posture and movement analysis from videos
• AI-generated developmental suggestions
• Calendar view of growth records
• Monthly development reports

【AI Analysis】
Upload videos of your child, and AI will analyze posture and movement patterns
to provide developmental reference information.
*AI analysis results are for reference only and do not replace medical diagnosis.

【Privacy Protection】
• Data is encrypted and stored securely
• We do not sell personal information to third parties
• Delete your account to completely erase all data

【Target Users】
This app is designed for parents and caregivers. It is not intended for
children to use directly.

【Important Notice】
This app is not a medical device. If you have concerns about your child's
development, please consult a healthcare professional.
```

---

### 3.2 キーワード（App Store用）

**日本語:**
```
発達,子供,赤ちゃん,成長記録,マイルストーン,AI分析,育児,子育て,発達支援,療育
```

**English:**
```
development,child,baby,growth,milestone,AI analysis,parenting,childcare,developmental support
```

---

### 3.3 スクリーンショット

#### 必要枚数

| プラットフォーム | 必須枚数 | 最大枚数 | 推奨枚数 |
|-----------------|---------|---------|---------|
| App Store | 1枚〜 | 10枚 | 5〜8枚 |
| Google Play | 2枚〜 | 8枚 | 5〜8枚 |

---

#### 必要サイズ（iOS）

| デバイス | 画面サイズ | 解像度 | 必須 |
|----------|-----------|--------|------|
| iPhone 16 Pro Max | 6.9インチ | 1320 x 2868 px | ✅ |
| iPhone 15 Pro Max | 6.7インチ | 1290 x 2796 px | ✅ |
| iPhone 14 Plus / 13 Pro Max | 6.7インチ | 1284 x 2778 px | - |
| iPhone 11 Pro Max / XS Max | 6.5インチ | 1242 x 2688 px | ✅ |
| iPhone 8 Plus / 7 Plus | 5.5インチ | 1242 x 2208 px | ✅ |
| iPad Pro 12.9インチ | 12.9インチ | 2048 x 2732 px | タブレット対応時 |
| iPad Pro 11インチ | 11インチ | 1668 x 2388 px | タブレット対応時 |

**ヒント**: 最大サイズ(6.9インチ)を用意すれば、App Store Connectで自動リサイズ可能

---

#### 必要サイズ（Android）

| アスペクト比 | 解像度 | 備考 |
|-------------|--------|------|
| 16:9（縦） | 1080 x 1920 px | 最小サイズ |
| 16:9（縦） | 1440 x 2560 px | 推奨 |
| 9:16（横） | 1920 x 1080 px | 横向き対応時 |

**要件**:
- 最小: 320px
- 最大: 3840px
- ファイル形式: JPEG または 24bit PNG（透過なし）
- ファイルサイズ: 最大8MB

---

#### 撮影する画面（推奨順）

| # | 画面名 | ファイルパス | 優先度 |
|---|--------|-------------|--------|
| 1 | ホーム | `src/pages/home/HomeScreen.tsx` | 必須 |
| 2 | 記録一覧 | `src/pages/record/RecordListScreen.tsx` | 必須 |
| 3 | 発達段階 + 発達詳細 | `src/pages/evaluation/DevelopmentalOverviewScreen.tsx` + `src/pages/evaluation/StageDetailScreen.tsx` | 必須 |
| 4 | AI分析結果 | `src/pages/AIAnalysis/ProcessVideoScreen.tsx` | 必須 |
| 5 | プロフィール | `src/pages/account/ProfileSummaryScreen.tsx` | 必須 |
| 6 | 成長マガジン | `src/pages/journal/DevelopmentalMagazineScreen.tsx` | 推奨 |
| 7 | スケジュール管理 | `src/pages/calendar/CalendarScreen.tsx` | 推奨 |
| 8 | 記録追加 | `src/pages/record/AddRecordScreen.tsx` | 推奨 |
| 9 | スキャン結果 | `src/pages/scan/OCRResultScreen.tsx` | 任意 |

**推奨構成（8枚）**: 1〜6 + 7または8から選択

---

#### スクリーンショットキャプション

| # | 画面 | 日本語 | English |
|---|------|--------|---------|
| 1 | ホーム | 今日の小さな成長を、見逃さない | Never miss today's small victories |
| 2 | 記録一覧 | 大切な瞬間を、ずっと残せる | Keep precious moments forever |
| 3 | 発達段階 + 発達詳細 | 「今どこにいて、何ができるか」がわかる | Know where your child is and what you can do |
| 4 | AI分析 | 家庭での観察をAIがサポート | AI supports your observations at home |
| 5 | プロフィール | 家族も専門家もOne Teamに | Family and experts as One Team |
| 6 | 成長マガジン | 成長の軌跡を特別な一冊に | Turn growth milestones into a keepsake |
| 7 | スケジュール管理 | 療育・通院・学校行事をまとめて管理 | Manage therapy, appointments & school events together |
| 8 | 記録追加 | 気づいた瞬間をすぐ記録 | Capture the moment you notice it |
| 9 | スキャン結果 | 大切な書類をいつでも検索 | Search important documents anytime |

---

#### スクリーンショット撮影のコツ

**1. データ準備**
- デモ用に見栄えの良い写真・動画データを用意
- 同じ子どものデータで統一感を出す
- 個人を特定できない配慮（サンプル画像推奨）

**2. 撮影環境**
```bash
# iOSシミュレーターでの撮影
xcrun simctl io booted screenshot screenshot.png

# Androidエミュレーターでの撮影
adb exec-out screencap -p > screenshot.png
```

**3. 推奨ツール**
- [Fastlane Snapshot](https://docs.fastlane.tools/actions/snapshot/) - 自動スクリーンショット
- [Screenshots](https://github.com/nicklockwood/Screenshots) - iOS用自動化
- Figma / Sketch - キャプション追加・デザイン加工

**4. デザインガイドライン**
- ステータスバーの時刻を統一（9:41 AMが一般的）
- バッテリー残量を100%に
- キャリア名を削除または統一
- 通知バッジを非表示に

**5. キャプション追加時の注意**
- フォントサイズは読みやすく（最小24pt推奨）
- 背景色はアプリのブランドカラーに合わせる
- 重要な情報が画面端で切れないよう配置

---

#### スクリーンショット作成ワークフロー

```
1. シミュレーター/実機でアプリを起動
   ↓
2. デモデータでログイン
   ↓
3. 各画面を撮影（PNG形式）
   ↓
4. デザインツールでキャプション追加
   ↓
5. 各サイズにリサイズ・書き出し
   ↓
6. App Store Connect / Play Consoleにアップロード
```

---

#### スクリーンショットチェックリスト

- [ ] 全必須サイズを用意（iOS: 6.9, 6.5, 5.5インチ / Android: 16:9）
- [ ] 最低5枚、理想は8枚用意
- [ ] 日本語版と英語版を用意
- [ ] キャプションがはみ出していないか確認
- [ ] 個人情報が映り込んでいないか確認
- [ ] ステータスバーが統一されているか確認
- [ ] 画像がぼやけていないか確認（高解像度）
- [ ] ファイルサイズが制限内か確認

---

## 4. 審査対応

### 4.1 よくある質問への回答

#### Q: このアプリは子供向けですか？

```
No, this app is designed for parents and caregivers to track their
children's development. Children do not directly interact with or
use this app. The app requires adult authentication (email/password)
and contains features intended for adult users only.
```

#### Q: AI分析はどのように機能しますか？

```
The app uses two AI technologies:

1. MediaPipe (On-device): Video analysis is performed entirely on the
   user's device. No video data is sent to external servers for analysis.

2. LLM-based suggestions: General developmental guidance is generated
   based on milestone data. All AI-generated content is clearly labeled
   as reference information, and users are advised to consult healthcare
   professionals for important decisions.
```

#### Q: 医療アプリとして分類されますか？

```
No, this app is NOT a medical device and does not provide medical
diagnosis or treatment. It is a parenting/lifestyle app that helps
parents track their children's developmental milestones. All AI
analysis results include clear disclaimers stating they are for
reference only and do not replace professional medical advice.
```

---

### 4.2 審査リジェクト時の対応

#### パターン1: プライバシー関連

```
問題: Privacy policy does not match data collection
対応: プライバシーポリシーの該当箇所を確認し、App Privacy Details
     と一致するよう更新
```

#### パターン2: デモアカウント

```
問題: Unable to test app features
対応: 新しいデモアカウントを作成し、サンプルデータを追加。
     App Review Notesにログイン情報を再記載
```

#### パターン3: 子供のデータ

```
問題: App collects children's data
対応: アプリは保護者向けであり、子供が直接使用しないことを説明。
     保護者が自身の子供について情報を入力する形式であることを明記
```

---

### 4.3 チェックリスト

#### 申請前

- [ ] プライバシーポリシーURLが有効でアクセス可能
- [ ] 利用規約URLが有効でアクセス可能
- [ ] デモアカウントが作成済み
- [ ] デモアカウントにサンプルデータが登録済み
- [ ] App Privacy Details / Data Safety Sectionが入力済み
- [ ] Age Ratingが設定済み
- [ ] App Review Notes / Instructions for reviewerが記載済み
- [ ] スクリーンショットが準備済み
- [ ] アプリ説明文が記載済み
- [ ] アプリ内にアカウント削除機能がある
- [ ] アプリ内にプライバシーポリシーへのリンクがある
- [ ] AI分析結果に免責事項が表示される

#### サーバー側

- [ ] サーバーが安定稼働している
- [ ] デモアカウントでログイン可能
- [ ] 全機能が正常動作する

---

## 連絡先

審査に関する問い合わせ: admin@withuai.com

---

*本ドキュメントはWithUアプリのApp Store/Google Play申請用に作成されました。*
