
// https://github.com/extrabacon/python-shell
var PythonShell = require("python-shell");
var pyshell = new PythonShell("my_script.py");

pyshell.send("hello");

pyshell.on("message", function(message) {
  console.log(message);
});

pyshell.end(function(err, code, signal) {
  if (err) throw err;
  console.log("The exit code was: " + code);
  console.log("The exit signal was: " + signal);
  console.log("finished");
  console.log("finished");
});
