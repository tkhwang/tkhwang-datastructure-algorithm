const http = require('http');

/*
server = http.createServer((req, res) => {
    // Write how to response.
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('It is waiting for 8080 port.');
});
*/

const server = http.createServer((req, res) => {
  // Write how to response.
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
});

server.listen(8080);

server.on('listening', () => {
  console.log('It is waiting for 8080 port.');
});

server.on('error', (error) => {
  console.log('error');
});
