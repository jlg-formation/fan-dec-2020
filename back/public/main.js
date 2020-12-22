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
      })
      .when("/stock/create", {
        templateUrl: "tmpl/appStockCreate.html",
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
  });

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
