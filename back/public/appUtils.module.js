(function () {
  "use strict";

  const module = angular.module("appUtils", []);

  module.filter("ellipsis", function () {
    return function (input, maxLength = 10) {
      if (input.length > maxLength) {
        return input.substr(0, maxLength) + "...";
      }
      return input;
    };
  });

  module.directive("appAutofocus", () => {
    return {
      restrict: "A",
      controller: function AutofocusCtrl($element) {
        console.log("AutofocusCtrl instantiated", $element);
        $element[0].focus();
      },
    };
  });
})();
