(function () {
  "use strict";
  const myApp = angular.module("myApp", []);

  myApp.directive("toto", () => {
    return {
      template: "<i>Hello world!</i>",
    };
  });
})();
