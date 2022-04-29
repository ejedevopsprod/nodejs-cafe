const DBConfig = require("../../config/DBConfig.json");

console.log("host-->" + DBConfig.host + "--");

const mysql = require("mysql2");

const mysqlConnection = mysql.createPool({
  connectionLimit: 5,
  host     : DBConfig.host,
  user     : DBConfig.user,
  password : DBConfig.password,
  database : DBConfig.database
  //...DBConfig,
  //host     : 'localhost',
  //user     : 'db_manager',
  //password : 'lRT0dhJS7hDUOVty',
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