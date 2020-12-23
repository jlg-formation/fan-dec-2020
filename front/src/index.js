import "./style.scss";

import "angular";
import "angular-route";
import "angular-i18n/angular-locale_fr-fr";

import "./appUtils.module";
import "./appLayout.module";
import "./appArticles.module";

import appHomeHtml from "./tmpl/appHome.html";
import appLegalHtml from "./tmpl/appLegal.html";
import appStockHtml from "./tmpl/appStock.html";
import appStockCreateHtml from "./tmpl/appStockCreate.html";

const myApp = angular.module("myApp", [
  "ngRoute",
  "appUtils",
  "appLayout",
  "appArticles",
]);

myApp.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $routeProvider
      .when("/", {
        template: appHomeHtml,
      })
      .when("/legal", {
        template: appLegalHtml,
      })
      .when("/stock", {
        template: appStockHtml,
        controller: "StockCtrl",
      })
      .when("/stock/create", {
        template: appStockCreateHtml,
        controller: "StockCreateCtrl",
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  },
]);

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
StockCtrl.$inject = ["$scope", "articleService"];

myApp.controller("StockCtrl", StockCtrl);

class StockCreateCtrl {
  constructor($scope, $location, articleService) {
    console.log("instantiation StockCreateCtrl");
    $scope.submit = function () {
      console.log("submit");
      articleService.add($scope.article);
      $location.path("/stock");
    };

    $scope.article = {
      name: "",
      price: 2.33,
      qty: 100,
    };
  }
}
StockCreateCtrl.$inject = ["$scope", "$location", "articleService"];

myApp.controller("StockCreateCtrl", StockCreateCtrl);
