(function () {
  "use strict";

  const module = angular.module("appArticles", []);

  module.service("articleService", HttpArticleService);
})();
