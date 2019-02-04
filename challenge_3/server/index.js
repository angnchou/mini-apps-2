//port = 3012
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
//process.env.port can be configured
const port = 5555;
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '/../public/dist')));

app.listen(port, () => {
  console.log('Listening on port ', port);
});

module.exports = app;
