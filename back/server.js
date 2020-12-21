const express = require("express");
const serveIndex = require("serve-index");
const app = express();
const port = 3000;

app.use(function (req, res, next) {
  console.log("req.url", req.url);
  next();
});

app.use(express.static("."));
app.use(serveIndex("."));

app.listen(port, () => {
  console.log("Server started with success on port " + port);
});
