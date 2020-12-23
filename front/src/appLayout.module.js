import appRootHtml from "./tmpl/appRoot.html";
import appHeaderHtml from "./tmpl/appHeader.html";
import appBodyHtml from "./tmpl/appBody.html";
import appFooterHtml from "./tmpl/appFooter.html";

const module = angular.module("appLayout", []);

module.directive("appRoot", () => {
  return {
    restrict: "E",
    template: appRootHtml,
  };
});

module.directive("appHeader", () => {
  return {
    restrict: "E",
    template: appHeaderHtml,
  };
});

module.directive("appBody", () => {
  return {
    restrict: "E",
    template: appBodyHtml,
  };
});

module.directive("appFooter", () => {
  return {
    restrict: "E",
    template: appFooterHtml,
  };
});
