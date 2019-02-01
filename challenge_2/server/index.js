const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3333;
const path = require('path');
const axios = require('axios');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../public')));

app.get('/bitcoin', (req, res) => {
  axios
    .get(
      'https://api.coindesk.com/v1/bpi/historical/close.json?start=2018-10-01&end=2019-01-31',
    )
    .then(currency => {
      console.log(currency, 'CURRE');
      res.status(200).send(JSON.stringify(currency.data.bpi));
    })
    .catch(err => {
      console.log(err, 'ERR');
      res.status(500).send(err);
    });
});

app.listen(port, () => {
  console.log('Listening on port ', port);
});

module.exports = app;
