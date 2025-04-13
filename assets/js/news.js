// ニュース記事データを読み込む
async function loadNewsData() {
    try {
        const response = await fetch('/assets/data/news.json');
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Failed to load news data:', error);
        return [];
    }
}

// ニュース一覧ページを生成
async function generateNewsIndex() {
    const articles = await loadNewsData();
    const lang = document.documentElement.lang;
    const newsGrid = document.querySelector('.news-grid');
    
    if (!newsGrid) return;
    
    articles.forEach(article => {
        const content = lang === 'ja' ? article.ja : article.en;
        const articleHtml = `
            <article class="news-card">
                <div class="news-image">
                    ${article.image ? `<img src="${article.image}" alt="${content.title}">` : ''}
                </div>
                <div class="news-content">
                    <time datetime="${article.date}">${formatDate(article.date, lang)}</time>
                    <h2>${content.title}</h2>
                    <p>${content.summary}</p>
                    <a href="detail.html?id=${article.id}" class="read-more">
                        ${lang === 'ja' ? '詳細を見る' : 'Read More'}
                    </a>
                </div>
            </article>
        `;
        newsGrid.insertAdjacentHTML('beforeend', articleHtml);
    });
}

// 詳細ページを生成
async function generateNewsDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('id');
    if (!articleId) return;

    const articles = await loadNewsData();
    const article = articles.find(a => a.id === articleId);
    if (!article) return;

    const lang = document.documentElement.lang;
    const content = lang === 'ja' ? article.ja : article.en;
    const articleContent = document.querySelector('.article-content');
    
    if (!articleContent) return;

    const articleHtml = `
        <time datetime="${article.date}">${formatDate(article.date, lang)}</time>
        <h1>${content.title}</h1>
        ${article.image ? `<img src="${article.image}" alt="${content.title}" class="article-image">` : ''}
        <div class="article-text">
            <p>${content.content}</p>
        </div>
    `;
    articleContent.innerHTML = articleHtml;

    // タイトルを更新
    document.title = `${content.title} - WithU AI`;
}

// 日付のフォーマット
function formatDate(dateStr, lang) {
    const [year, month] = dateStr.split('-');
    return lang === 'ja' 
        ? `${year}年${month}月`
        : new Date(`${dateStr}-01`).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
}

// ページ読み込み時に実行
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('detail.html')) {
        generateNewsDetail();
    } else {
        generateNewsIndex();
    }
}); 