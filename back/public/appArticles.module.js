(function () {
  "use strict";

  const module = angular.module("appArticles", []);

  module.service(
    "articleService",
    class ArticleService {
      articles = this.getArticles();

      constructor() {
        console.log("ArticleService instantiated");
      }

      getArticles() {
        const str = localStorage.getItem("articles");
        if (!str) {
          return [];
        }
        return JSON.parse(str);
      }

      add(article) {
        article.id = "a" + Math.floor(Math.random() * 1e12);
        this.articles.push(article);
        this.save();
      }

      save() {
        localStorage.setItem("articles", JSON.stringify(this.articles));
      }

      remove(articles) {
        this.articles = this.articles.filter((a) => !articles.includes(a));
        this.save();
      }
    }
  );
})();
