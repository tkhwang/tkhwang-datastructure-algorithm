const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("hello word");
});

app.listen(4000);
