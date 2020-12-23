import { HttpArticleService } from "./HttpArticleService";

const module = angular.module("appArticles", []);

module.service("articleService", HttpArticleService);
