const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  fs.readFile('./server.html', (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
}).listen(8081, () => {
  console.log('It is now waiting for 8081 port.');
});
