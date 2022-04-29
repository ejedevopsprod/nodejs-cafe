const DBConfig = require("./DBConfig.json");

console.log("host-->" + DBConfig.host + "--");
console.log("user-->" + DBConfig.user + "--");
console.log("pass-->" + DBConfig.password + "--");
console.log("db---->" + DBConfig.database + "--");

const mysql = require("mysql2");

const mysqlConnection = mysql.createPool({
  connectionLimit: 5,
  
  host     : DBConfig.host,
  user     : DBConfig.user,
  //password : DBConfig.password.toString(),
  database : DBConfig.database,
  
  debug : true,
  
  //...DBConfig,
  
  //host     : 'localhost',
  //user     : 'db_manager',
  password : 'lRT0dhJS7hDUOVty',
  //database : 'profuturo_salon_del_cliente'
  
});

mysqlConnection.getConnection((error) => {
  if (error) {
    throw error;
  } else {
    console.log("database connection ok");
    //connection.destroy();
  }
});

//module.exports = mysqlConnection;