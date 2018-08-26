const http = require('http');
const request = require('request');

const hostname = '127.0.0.1';

const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

const url = 'https://api.bitfinex.com/v1/pubticker/btcgbp';

request(url, (err, response, body) => {
  if (err) {
    console.log('error:', error);
  } else {
    console.log('body', body);
  }
});