const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const port = 3000;
const www = "public";
const node_modules = "node_modules";

app.use(function (req, res, next) {
  console.log("req.url", req.url);
  next();
});

app.use(express.static(node_modules));
app.use(express.static(www));
app.use(serveIndex(www));

app.listen(port, () => {
  console.log("Server started with success on port " + port);
});
