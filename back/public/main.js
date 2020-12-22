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
      articles = [
        { name: "Tournevis", price: 2.99, qty: 100 },
        { name: "Tournevis Cruciforme", price: 2.23, qty: 12 },
        { name: "Pince", price: 4, qty: 345 },
        { name: "Tondeuse à gazon", price: 2.99, qty: 3 },
      ];

      constructor() {
        console.log("ArticleService instantiated");
      }
    }
  );

  myApp.controller(
    "StockCtrl",
    class StockCtrl {
      constructor($scope, articleService) {
        $scope.articleService = articleService;
      }
    }
  );

  myApp.controller(
    "StockCreateCtrl",
    class StockCreateCtrl {
      constructor($scope, $location) {
        console.log("instantiation StockCreateCtrl");
        $scope.submit = function () {
          console.log("submit");
          $location.path("/stock");
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
})();
