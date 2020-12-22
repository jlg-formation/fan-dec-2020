(function () {
  "use strict";

  const myApp = angular.module("myApp", ["ngRoute"]);

  myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "tmpl/appHome.html",
      })
      .when("/legal", {
        templateUrl: "tmpl/appLegal.html",
      })
      .when("/stock", {
        templateUrl: "tmpl/appStock.html",
        controller: "StockCtrl",
      })
      .when("/stock/create", {
        templateUrl: "tmpl/appStockCreate.html",
        controller: "StockCreateCtrl",
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });

  myApp.service(
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

  myApp.controller(
    "StockCtrl",
    class StockCtrl {
      constructor($scope, articleService) {
        $scope.articleService = articleService;
        $scope.selectedArticles = [];

        $scope.toggle = function (article) {
          console.log("toggle", article);
          if ($scope.selectedArticles.includes(article)) {
            $scope.selectedArticles = $scope.selectedArticles.filter(
              (a) => a !== article
            );
            return;
          }
          $scope.selectedArticles.push(article);
        };

        $scope.remove = function () {
          console.log("remove");
          articleService.remove($scope.selectedArticles);
          $scope.selectedArticles = [];
        };
      }
    }
  );

  myApp.controller(
    "StockCreateCtrl",
    class StockCreateCtrl {
      constructor($scope, $location, articleService) {
        console.log("instantiation StockCreateCtrl");
        $scope.submit = function () {
          console.log("submit");
          articleService.add($scope.article);
          $location.path("/stock");
        };

        $scope.article = {
          name: "Tournevis",
          price: 2.33,
          qty: 100,
        };
      }
    }
  );

  myApp.directive("appRoot", () => {
    return {
      templateUrl: "./tmpl/appRoot.html",
    };
  });

  myApp.directive("appHeader", () => {
    return {
      templateUrl: "./tmpl/appHeader.html",
    };
  });

  myApp.directive("appBody", () => {
    return {
      templateUrl: "./tmpl/appBody.html",
    };
  });

  myApp.directive("appFooter", () => {
    return {
      templateUrl: "./tmpl/appFooter.html",
    };
  });

  myApp.filter("ellipsis", function () {
    return function (input, maxLength = 10) {
      if (input.length > maxLength) {
        return input.substr(0, maxLength) + "...";
      }
      return input;
    };
  });
})();
