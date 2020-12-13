const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/shop", route);

  route.get("/items", (req, res) => {
    let sql = "SELECT * FROM e_prekes";
    if (req.query.query !== "") {
      sql = sql.concat(` WHERE pavadinimas LIKE '%${req.query.query}%'`);
    }
    if (req.query.category !== "") {
      if (req.query.query !== "") {
        sql = sql.concat(` AND fk_E_Kategorija=${req.query.category}`);
      } else {
        sql = sql.concat(` WHERE fk_E_Kategorija=${req.query.category}`);
      }
    }
    connection.query(sql, (err, result) => {
      console.log(req.query);
      if (err) {
        console.log(err);
        throw err;
      }
      res.json(result);
    });
  });

  route.get("/categories", (req, res) => {
    connection.query("SELECT * FROM e_kategorijos", (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.json(result);
    });
  });
};
