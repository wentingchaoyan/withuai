# HugMap FAQ 計測仕様

## 目的

FAQのPVだけでなく、利用者が必要な回答を見つけ、読み、HugMapアプリへの次の行動につながったかを確認する。

検索内容は発達・健康に関するセンシティブ情報になり得るため、入力された検索語そのものは送信しない。氏名、メールアドレス、子どもの情報などの個人情報もイベントパラメータに含めない。

## 推奨構成

- アプリのFirebaseプロジェクトにリンクされている既存GA4プロパティを使用する
- 同じGA4プロパティにWebデータストリームを追加する
- Web FAQ用の測定IDをHTMLの `HUGMAP_ANALYTICS_CONFIG` に設定する
- GTMを使う場合は `measurementId` を空にし、`gtmContainerId` だけを設定する
- GA4とGTMの両方を同時に設定しない（二重計測防止）

### GA4を直接利用する場合

```html
<script>
window.HUGMAP_ANALYTICS_CONFIG = {
  measurementId: "G-XXXXXXXXXX",
  gtmContainerId: "",
  consentDefault: "denied"
};
</script>
<script src="assets/js/hugmap-analytics.js"></script>
```

### Google Tag Managerを利用する場合

```html
<script>
window.HUGMAP_ANALYTICS_CONFIG = {
  measurementId: "",
  gtmContainerId: "GTM-XXXXXXX",
  consentDefault: ""
};
</script>
<script src="assets/js/hugmap-analytics.js"></script>
```

GTMでは各カスタムイベント名をトリガーにし、同名のGA4イベントタグへ接続する。

## 実装イベント

| イベント | 発火条件 | 主なパラメータ |
|---|---|---|
| `faq_open` | 閉じている回答を開く | `faq_code`, `persona`, `category_l1`, `category_l2`, `category_l3` |
| `persona_select` | 先生・分野タイルを選択／解除 | `persona`, `result_count` |
| `faq_search` | 検索入力後700ms経過 | `query_length`, `result_count`, `persona` |
| `search_no_results` | 検索結果が0件 | `query_length`, `persona` |
| `app_cta_click` | アプリCTAをクリック | `placement`, `faq_code`, `persona` |
| `source_link_click` | 回答の出典リンクをクリック | `faq_code`, `persona`, `source_domain` |
| `load_more` | 「もっと見る」をクリック | `visible_count`, `total_count` |
| `faq_feedback` | 「役に立った／立たなかった」 | `faq_code`, `persona`, `helpful` |
| `scroll_depth` | 50%／90%へ初めて到達 | `percent` |

`faq_search` と `search_no_results` には検索語を含めない。`source_domain` はリンク先ドメインのみとし、完全なURLは送らない。

## GA4側の設定

GA4の「カスタム定義」で、分析に使う次のイベントパラメータをイベントスコープのカスタムディメンションとして登録する。

- `faq_code`
- `persona`
- `category_l1`
- `category_l2`
- `category_l3`
- `placement`
- `helpful`
- `percent`

`app_cta_click` は主要イベント（キーイベント）の候補とする。`faq_open` は件数が多くなるため、通常イベントのまま利用する。

## 公開前チェック

1. 本番Webデータストリームの測定IDを確認する
2. HTML内の空のIDを設定する
3. GA4 DebugViewまたはGTM Previewで各イベントを確認する
4. 同じ操作が二重計測されていないことを確認する
5. 検索語や個人情報が送信されていないことを確認する
6. プライバシーポリシーと同意管理を実際の運用に合わせる
7. レビュー用アクセスを本番集計から除外する

## 同意管理

Cookie同意を必要とする運用では、法務・プライバシー方針に合わせて設定する。GA4直接利用時に `consentDefault: "denied"` を指定すると、タグ設定より前にAnalytics Storageを拒否状態にする。GTM利用時はGTM側のConsent Mode設定を使用する。

同意UIで選択が変わったときは、GA4直接利用時に次を呼び出せる。

```js
HugMapAnalytics.setConsent(true);  // 同意
HugMapAnalytics.setConsent(false); // 拒否
```

同意要件は配信地域や利用目的で変わるため、本番公開前に確認すること。
