const mysql = require("mysql");
require("dotenv");

var db_config = {
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
};

var con = mysql.createPool(db_config);

module.exports = con;
