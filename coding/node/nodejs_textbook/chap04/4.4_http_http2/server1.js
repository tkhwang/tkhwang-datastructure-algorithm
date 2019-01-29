const http = require('http');

http.createServer((req, res) => {
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
  console.log('Waiting for the request in 8080 port.');
});
