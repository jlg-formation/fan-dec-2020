(function () {
  "use strict";

  const module = angular.module("appLayout", []);

  module.directive("appRoot", () => {
    return {
      restrict: "E",
      templateUrl: "./tmpl/appRoot.html",
    };
  });

  module.directive("appHeader", () => {
    return {
      restrict: "E",
      templateUrl: "./tmpl/appHeader.html",
    };
  });

  module.directive("appBody", () => {
    return {
      restrict: "E",
      templateUrl: "./tmpl/appBody.html",
    };
  });

  module.directive("appFooter", () => {
    return {
      restrict: "E",
      templateUrl: "./tmpl/appFooter.html",
    };
  });
})();
