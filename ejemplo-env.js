require('dotenv').config();

console.log("----------- DATOS DE LAS VARIABLES --------------");
console.log(`HOST=${process.env.HOST}`);
console.log(`DATABASE=${process.env.DATABASE}`);
console.log(`USER=${process.env.USER}`);
console.log(`PASSWORD=${process.env.PASSWORD}`);
console.log("----------- DATOS DE LAS VARIABLES --------------");

const mysql = require("mysql2");

const mysqlConnection = mysql.createPool({
  connectionLimit: 5,  
  host     : process.env.HOST,
  user     : process.env.USER,
  password : process.env.PASSWORD,
  //password : 'lRT0dhJS7hDUOVty',
  database : process.env.DATABASE,
  //debug : true
  port: 3306
});

mysqlConnection.getConnection((error) => {
  if (error) {
    throw error;
  } else {
    console.log("database connection ok");
    
  }
});


