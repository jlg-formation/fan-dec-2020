class HttpArticleService extends ArticleService {
  constructor($http) {
    super();
    console.log("http article instantiated");
    console.log("$http: ", $http);
    this.$http = $http;
    this.refresh();
  }

  refresh() {
    this.$http.get("http://localhost:3000/api/articles").then((response) => {
      console.log("response: ", response);
      this.articles = response.data;
    });
  }

  add(article) {
    super.add(article);
    this.$http
      .post("http://localhost:3000/api/articles", article)
      .then((response) => {
        this.refresh();
      });
  }
}
