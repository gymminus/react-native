const { Router } = require("express");
//Require all routes here
const sport = require("./routes/sport");
const shop = require("./routes/shop");

module.exports = (connection) => {
  const app = Router();
  // And include them in the export
  sport(app, connection);
  shop(app, connection);

  return app;
};
