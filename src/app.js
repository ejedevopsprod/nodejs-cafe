require('dotenv').config();
var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
  res.send('-----------------');
  res.send(('HOST=${process.env.HOST}');
  res.send('DATABASE=${process.env.DATABASE}');
  res.send('USER=${process.env.USER}');
  res.send('PASSWORD=${process.env.PASSWORD}');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

