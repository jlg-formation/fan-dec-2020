const express = require("express");
const serveIndex = require("serve-index");
const path = require("path");
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

app.use(function (req, res, next) {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log("Server started with success on port " + port);
});
