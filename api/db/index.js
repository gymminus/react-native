var mysql = require("mysql");
require("dotenv");

var db_config = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
};

const connect = () => {
  var con = mysql.createConnection(db_config);

  con.connect((err) => {
    if (err) {
      console.log(`error when connecting to db: ${err}`);
      setTimeout(connect, 2000);
    }
  });

  con.on(`error`, (err) => {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connect();
    } else {
      throw err;
    }
  });

  return con;
};

module.exports = connect;
