const http = require('http');

http.createServer((req, res) => {
    // Write how to response.
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
}).listen(8080, () => {
    console.log('It is waiting for 8080 port.');
});