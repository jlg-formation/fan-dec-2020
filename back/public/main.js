(function () {
  "use strict";
  const myApp = angular.module("myApp", []);

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
