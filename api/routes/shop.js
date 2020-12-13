const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/shop", route);

  route.get("/items", (req, res) => {
    connection.query("SELECT * FROM e_prekes", (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.json(result);
    });
  });
};
