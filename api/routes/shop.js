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

  route.post("/order", (req, res) => {
    connection.query(
      "INSERT INTO e_uzsakymai(data, fk_Vartotojas) VALUES(NOW(), 3)",
      (err, result) => {
        if (err) {
          console.log(err);
          throw err;
        }
        let sql =
          "INSERT INTO uzsakomu_prekiu_kiekiai(kiekis, fk_E_Preke, fk_E_Uzsakymas) VALUES";
        for (let i = 0; i < req.body.order.length; i++) {
          let isLast = req.body.order.length - 1 === i;
          sql = sql.concat(
            `(${req.body.order[i].count}, ${req.body.order[i].id_E_Preke}, ${result.insertId})`
          );
          sql = sql.concat(isLast ? ";" : ",");
        }
        connection.query(sql, (err, result) => {
          if (err) {
            console.log(err);
            throw err;
          }
          res.json("super");
        });
      }
    );
  });
};
