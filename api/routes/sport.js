const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/sport", route);

  route.get("/reservations", (req, res) => {
    connection.query("SELECT * FROM rezervacija", (err, result) => {
      if (err) throw err;
      console.log("Result: " + result);
      res.json(result);
    });
  });

  route.post("/sportclub", (req, res) => {
    const data = req.body.data;
    connection.query(
      `INSERT INTO sporto_sales (adresas, vietu_skaicius, aprasymas, fk_Administratoriai)
                      VALUES ("${data.adresas}", ${data.vietu_skaicius}, "${data.aprasymas}", 4)`,
      (err) => {
        if (err) throw err;
        res.sendStatus(200);
      }
    );
  });

  route.get("/sportclub", (req, res) => {
    connection.query(`SELECT * FROM sporto_sales`, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  route.delete("/sportclub", (req, res) => {
    const data = req.body;
    connection.query(
      `DELETE FROM sporto_sales WHERE id_sporto_sale=${data.id}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });
};
