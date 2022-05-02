require('dotenv').config();
var express = require('express');
app = express();

console.log("----------- DATOS DE LAS VARIABLES --------------");
console.log('HOST::::::', process.env.HOST);
console.log('DATABASE:::::::::::::', process.env.DATABASE);
console.log('USERNAME::::::', process.env.USER);
console.log('PASSWORD::::::', process.env.PASSWORD);
console.log("----------- DATOS DE LAS VARIABLES --------------");

app.get('/', function (req, res) {
  res.send('Hello World!');
  res.send(process.env.HOST);
  res.send(process.env.DATABASE);
  res.send(process.env.USER);
  res.send(process.env.PASSWORD); 
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

