const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      return fs.readFile('./restFront.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
    if (req.url === '/about') {
      return fs.readFile('./about.html', (err, data) => {
        if (err) {
          throw err;
        }
        res.end(data);
      });
    }
    if (req.url === '/users') {
      return res.end(JSON.stringify(users));
    }
    return fs.readFile(`.${req.url}`, (err, data) => {
      if (err) {
        res.writeHead(404, 'NOT_FOUND');
        return res.end('NOT FOUND');
      }
      return res.end(data);
    });
  } if (req.method === 'POST') {
    if (req.url === '/users') {
      let body = '';
      req.on('data', (data) => {
        body += data;
      });
      return req.on('end', () => {
        console.log('POST 본문(Body):', body);
        const {
          name
        } = JSON.parse(body);
        const id = new Date();
        users[id] = name;
        res.writeHead(201);
        res.end('등록성공');
      });
    }
  }
});
