const express = require('express');
const bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log('Listening to port 3000!');
});
