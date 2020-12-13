const { Router } = require("express");
//Require all routes here
const sport = require("./routes/sport");
const account = require("./routes/account");

module.exports = (connection) => {
  const app = Router();
  // And include them in the export
  sport(app, connection);
  account(app, connection);

  return app;
};
