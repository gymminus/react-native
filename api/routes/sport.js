const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/sport", route);

  route.get("/reservations", (req, res) => {
    var con = connection();
    con.query("SELECT * FROM rezervacija", (err, result) => {
      if (err) throw err;
      console.log("Result: " + result);
      res.json(result);
    });
  });

  route.get("/sportclub/add", (req, res) => {});
};
