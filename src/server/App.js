const express = require('express');
const request = require('request');
const app = express();

const url = 'https://api.bitfinex.com/v1/pubticker/btcgbp';
let tickerData;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/ticker', (req, res) => {
  request(url, (err, response, body) => {
    tickerData = err ? err : body;
  });
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.send(tickerData);
});

app.listen(3001, () => console.log('Example app listening on port 3001!'));
