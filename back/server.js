const express = require("express");
const serveIndex = require("serve-index");
const path = require("path");
const app = express();
const port = 3000;
const www = "public";
const node_modules = "node_modules";

const articles = [
  { id: "a1", name: "Tournevis", price: 2.99, qty: 100 },
  { id: "a2", name: "Tournevis Cruciforme", price: 2.23, qty: 12 },
  { id: "a3", name: "Pince", price: 4, qty: 345 },
  { id: "a4", name: "Tondeuse à gazon", price: 2.99, qty: 3 },
];

let nextId = 5;

app.use(express.json());

app.use(function (req, res, next) {
  console.log("req.url", req.url);
  next();
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.post("/api/articles", (req, res) => {
  const article = req.body;
  article.id = "a" + nextId;
  nextId++;
  articles.push(article);
  res.status(201).json(article);
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
