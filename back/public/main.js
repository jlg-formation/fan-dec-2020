(function () {
  "use strict";

  const myApp = angular.module("myApp", [
    "ngRoute",
    "appUtils",
    "appLayout",
    "appArticles",
  ]);

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
})();
