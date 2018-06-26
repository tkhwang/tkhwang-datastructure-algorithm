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
console.log(wordArray);

// Query via http://127.0.0.1/?word=XXX
app.get("/", function(req, res) {
  // ejs render automatically looks in the views folder
  var input_word = req.query.word;
  console.log("[+] input_word ", input_word);

  for (var i=0 ; wordArray.length, i++ ) {
	  
  }
  var distance = levenshtein.get(input_word, "book");
  console.log("[+] distance = ", distance);

  res.render("index");
});

app.listen(port, function() {
  console.log("Our app is running on http://localhost:" + port);
});
