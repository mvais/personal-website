import articles from './modules/articles'

if (document.querySelector('#articles')) {
  const articleList = document.querySelector('#articles');

  for (let article of articles) {
    const li = document.createElement('li');

    li.innerHTML = `(${article.date}) ${article.name}`;

    articleList.appendChild(li);
  }
}

if (document.querySelector('#article-filter')) {
  const input = document.querySelector('#article-filter');

  input.addEventListener('input', function (event) {
    const articleList = document.querySelector('#articles');
    const filteredArticles = articles.filter(article => {
      if (article.name.toLowerCase().includes(input.value)) return true
    });

    articleList.innerHTML = '';

    for (let article of filteredArticles) {
      const li = document.createElement('li');

      li.innerHTML = `(${article.date}) ${article.name}`;

      articleList.appendChild(li);
    }
  })
}
