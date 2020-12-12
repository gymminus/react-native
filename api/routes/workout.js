const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/workout", route);

  //sport.js pavyzdys
};
