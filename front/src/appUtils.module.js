import "./scss/appUtils.scss";

import appStockTotalHtml from "./tmpl/appStockTotal.html";

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

module.component("appStockTotal", {
  bindings: {
    articles: "<",
  },
  template: appStockTotalHtml,
  controller: class StockTotalCtrl {
    constructor($scope) {
      this.$scope = $scope;
      console.log("mes articles", this.articles);
      $scope.total = 0;
    }

    $onChanges(changesObj) {
      console.log("changesObj: ", changesObj);
      const articles = changesObj.articles.currentValue;
      console.log("articles: ", articles);
      this.$scope.total = getTotal(articles);
    }
  },
});

function getTotal(articles) {
  return articles.map((a) => a.qty * a.price).reduce((acc, n) => acc + n, 0);
}
