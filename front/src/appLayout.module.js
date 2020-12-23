import appRootHtml from "./tmpl/appRoot.html";
import appHeaderHtml from "./tmpl/appHeader.html";
import appBodyHtml from "./tmpl/appBody.html";
import appFooterHtml from "./tmpl/appFooter.html";

const module = angular.module("appLayout", []);

module.component("appRoot", {
  template: appRootHtml,
});

module.component("appHeader", {
  template: appHeaderHtml,
});

module.component("appBody", {
  template: appBodyHtml,
});

module.component("appFooter", {
  template: appFooterHtml,
  controller: class FooterCtrl {
    constructor($scope) {
      $scope.year = new Date().getFullYear();
    }
  },
});
