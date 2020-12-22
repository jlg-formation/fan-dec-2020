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
          return [
            { id: "a1", name: "Tournevis", price: 2.99, qty: 100 },
            { id: "a2", name: "Tournevis Cruciforme", price: 2.23, qty: 12 },
            { id: "a3", name: "Pince", price: 4, qty: 345 },
            { id: "a4", name: "Tondeuse à gazon", price: 2.99, qty: 3 },
          ];
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
