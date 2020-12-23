import { ArticleService } from "./ArticleService";
import { env } from "./environment/environment";

export class HttpArticleService extends ArticleService {
  constructor($http) {
    super();
    console.log("http article instantiated");
    console.log("$http: ", $http);
    this.$http = $http;
    this.refresh();
  }

  refresh() {
    this.$http.get(env.articleUrl).then((response) => {
      console.log("response: ", response);
      this.articles = response.data;
    });
  }

  add(article) {
    super.add(article);
    this.$http.post(env.articleUrl, article).then((response) => {
      this.refresh();
    });
  }

  remove(articles) {
    super.remove(articles);
    const ids = articles.map((a) => a.id);
    const config = {
      data: ids,
      headers: {
        "Content-Type": "application/json",
      },
    };
    this.$http.delete(env.articleUrl, config).then((response) => {
      this.refresh();
    });
  }
}
