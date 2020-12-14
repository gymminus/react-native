const { Router } = require("express");
//Require all routes here
const sport = require("./routes/sport");
const account = require("./routes/account");
const shop = require("./routes/shop");
const workout = require("./routes/workout");

module.exports = (connection) => {
  const app = Router();
  // And include them in the export
  sport(app, connection);
  account(app, connection);
  shop(app, connection);
  workout(app, connection);
  return app;
};
