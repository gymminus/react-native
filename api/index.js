const { Router } = require("express");
const spa = require("./routes/spa");
//Require all routes here
const sport = require("./routes/sport");

module.exports = (connection) => {
  const app = Router();
  // And include them in the export
  sport(app, connection);




  
  spa(app, connection);

  return app;
};
