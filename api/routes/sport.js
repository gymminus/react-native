const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/sport", route);

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

  route.get("/activities", (req, res) => {
    const data = req.query;
    connection.query(
      `SELECT 
       u.*,
       s.adresas,
       s.vietu_skaicius,
       n.vardas,
       n.pavarde,
       r.fk_id_Naudotojas
       FROM sporto_uzsiemimai AS u
       LEFT JOIN rezervacija r
       ON u.id_sporto_uzsiemimas = r.fk_id_sporto_uzsiemimas AND r.fk_id_Naudotojas = ${data.id}
       LEFT JOIN sporto_sales s
       ON u.fk_sporto_sale = s.id_sporto_sale
       LEFT JOIN naudotojai n
       ON u.fk_treneriai=n.id_Naudotojas
       ORDER BY u.laikas`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.get("/coaches", (req, res) => {
    connection.query(
      `SELECT * FROM naudotojai n
       RIGHT JOIN treneriai t
       ON n.id_Naudotojas=t.id_Naudotojas`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.post("/activities", (req, res) => {
    const data = req.body.data;
    connection.query(
      `INSERT INTO sporto_uzsiemimai (laikas, pavadinimas, aprasymas, fk_sporto_sale, fk_Treneriai)
       VALUES ("${data.laikas}", "${data.pavadinimas}", "${data.aprasymas}", ${data.fk_sporto_sale}, ${data.fk_Treneriai})`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.delete("/activities", (req, res) => {
    const data = req.body;
    connection.query(
      `DELETE FROM sporto_uzsiemimai WHERE id_sporto_uzsiemimas=${data.id}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.post("/reservations", (req, res) => {
    const data = req.body.data;
    connection.query(
      `INSERT INTO rezervacija (fk_id_Naudotojas, fk_id_sporto_uzsiemimas)
       VALUES (${data.id_n}, ${data.id_su})`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.get("/reservations", (req, res) => {
    const data = req.query;
    connection.query(
      `SELECT r.*, s.laikas, s.pavadinimas, s.fk_sporto_sale, ss.adresas
       FROM rezervacija AS r
       LEFT JOIN sporto_uzsiemimai s
       ON r.fk_id_sporto_uzsiemimas = s.id_Sporto_Uzsiemimas
       LEFT JOIN sporto_sales ss
       ON s.fk_sporto_sale = ss.id_sporto_sale
       WHERE r.fk_id_Naudotojas = ${data.id} `,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });

  route.delete("/reservations", (req, res) => {
    const data = req.body;
    connection.query(
      `DELETE FROM rezervacija WHERE id_Rezervacija=${data.id}`,
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });
};
