const { Router } = require("express");
//Require all routes here
const sport = require("./routes/sport");

module.exports = (connection) => {
  const app = Router();
  // And include them in the export
  sport(app, connection);

  return app;
};
