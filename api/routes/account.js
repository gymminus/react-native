const { Router, Request, Response } = require("express");
const route = Router();
const moment = require("moment");

module.exports = (app, connection) => {
  app.use("/account", route);

  route.get(`/holidays`, (req, res) => {
    //console.log(req.params)
    id = req.query.userId;

    connection.query(
      `SELECT * FROM atostogos where fk_Vartotojas=${id}`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  route.post("/holidays/set", (req, res) => {
    connection.query(
      `INSERT INTO atostogos (pradzia,pabaiga,fk_Vartotojas)
    values("${req.body.datefrom}","${req.body.dateto}",${req.body.user})`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  route.post("/injuries/set", (req, res) => {
    day = new Date().getDate();
    month = new Date().getMonth() + 1;
    year = new Date().getFullYear();
    date = year + "-" + month + "-" + day;
    connection.query(
      `INSERT INTO vartotojo_traumos (data,aprasymas,fk_Vartotojas)
    values("${date}","${req.body.aboutInjury}",${req.body.user})`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });
  route.get(`/injuries`, (req, res) => {
    id = req.query.userId;

    connection.query(
      `SELECT * FROM vartotojo_traumos where fk_Vartotojas=${id}`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  route.get(`/user`, (req, res) => {
    //console.log(req.params)
    id = req.query.userId;

    connection.query(
      `SELECT * FROM naudotojai where id_Naudotojas=${id}`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });
  route.post("/user/set", (req, res) => {
    connection.query(
      `UPDATE naudotojai
      SET vardas="${req.body.name}",
      pavarde="${req.body.surname}",
      el_pastas="${req.body.email}",
      gimimo_data="${req.body.bornDate}"
      WHERE id_Naudotojas=${req.body.userId}`,
      (err, result) => {
        if (err) throw err;

        res.json(result);
      }
    );
  });

  route.post("/complaint", (req, res) => {
    connection.query(
      `INSERT INTO vartotojo_skundai
      (skundas,fk_Vartotojas)
      VALUES ("${req.body.complaint}",${req.body.userId})`,
      (err, result) => {
        if (err) throw err;

        res.json(result);
      }
    );
  });

  route.post("/deleteUser", (req, res) => {
    connection.query(
      `DELETE FROM naudotojai WHERE id_Naudotojas=${req.body.userId}`,
      (err, result) => {
        if (err) throw err;

        res.json(result);
      }
    );
  });
};
