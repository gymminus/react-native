const { Router, Request, Response } = require("express");
const route = Router();
const moment= require('moment')

module.exports = (app, connection) => {
  app.use("/account", route);

  route.get(`/holidays`, (req, res) => {
    //console.log(req.params)
    id=req.query.userId
    console.log(id)
    connection.query(`SELECT * FROM atostogos where fk_Vartotojas=${id}`, (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  route.post("/holidays/set", (req, res) => {
    
    connection.query(`INSERT INTO atostogos (pradzia,pabaiga,fk_Vartotojas)
    values("${req.body.datefrom}","${req.body.dateto}",${req.body.user})`, (err, result) => {
      if (err) throw err;
      console.log("Result: " + result);
      res.json(result);
    });

    
  });
};
