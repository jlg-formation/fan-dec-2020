(function () {
  "use strict";

  const module = angular.module("appLayout", []);

  module.directive("appRoot", () => {
    return {
      templateUrl: "./tmpl/appRoot.html",
    };
  });

  module.directive("appHeader", () => {
    return {
      templateUrl: "./tmpl/appHeader.html",
    };
  });

  module.directive("appBody", () => {
    return {
      templateUrl: "./tmpl/appBody.html",
    };
  });

  module.directive("appFooter", () => {
    return {
      templateUrl: "./tmpl/appFooter.html",
    };
  });
})();
