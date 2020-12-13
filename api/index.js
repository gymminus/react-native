const { Router } = require("express");
//Require all routes here
const sport = require("./routes/sport");
const workout = require("./routes/workout");

module.exports = (connection) => {
  const app = Router();
  // And include them in the export
  sport(app, connection);
  workout(app, connection);
  return app;
};
