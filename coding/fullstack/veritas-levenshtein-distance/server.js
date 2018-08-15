var express = require("express");
var app = express();
// https://github.com/hiddentao/fast-levenshtein
var levenshtein = require("fast-levenshtein");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set("view engine", "ejs");

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + "/public"));

// Word list from word-list
const fs = require("fs");
const wordListPath = require("word-list");
const wordArray = fs.readFileSync(wordListPath, "utf8").split("\n");
var newWordArray = [];
var newWordObject = {};
console.log(wordArray);

app.get("/", function(req, res) {
  res.render("index");
});

// Query via http://127.0.0.1/qeury
//           http://127.0.0.1/qeury/?word=test
app.get("/query", function(req, res) {
  var input_word = req.query.word;
  console.log("[+] input_word ", input_word);

  for (var i = 0, length = wordArray.length; i < length; i++) {
    newWordArray.push(wordArray[i]);
    newWordObject[newWordArray[i]] = distance;
    var distance = levenshtein.get(input_word, wordArray[i]);
    console.log("[*] ", wordArray[i], distance);
  }
  console.log("[*] newWordObject = ", newWordObject);
});

app.listen(port, function() {
  console.log("Our app is running on http://localhost:" + port);
});
