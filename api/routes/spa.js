const { Router, Request, Response } = require("express");
const route = Router();



module.exports = (app, connection) => {
  
  app.use("/spa", route);

  // get spa procedures 
  route.get("/get-spa-procedures", (req, res) => {
    connection.query("SELECT * FROM spa_proceduros", (err, result) => {
      if (err) throw err;
      res.json(result);
    });

  });

  route.post("/post-spa-procedure", (req, res) => {

    connection.query(
      "INSERT INTO spa_rezervacijos SET ?",
      {
        pradzia: req.body.laikas,
        pabaiga: req.body.laikas,
        savaites_diena: req.body.data,
        fk_Vartotojas: req.body.id,
        fk_Spa_Procedura: req.body.procedura,
      },
      function (error, results, fields) {
        if (error) throw error;
        res.json({
          success: "Inserted Successfully",
          status: 200,
        });

      }
    );


  });

  route.get("/get-spa-reservation", (req, res) => {

///SELECT p.id_Spa_Rezervacija, p.pradzia, p.savaites_diena, p.fk_Vartotojas, p.fk_Spa_Procedura, c1.pavadinimas, c1.tipas
//FROM heroku_5fcad938101258b.spa_rezervacijos p
//LEFT JOIN heroku_5fcad938101258b.spa_proceduros c1 ON p.fk_Spa_Procedura = c1.id_Spa_Procedura


    connection.query("SELECT p.id_Spa_Rezervacija, p.pradzia, p.savaites_diena, p.fk_Vartotojas, p.fk_Spa_Procedura, c1.pavadinimas, c1.tipas FROM spa_rezervacijos p LEFT JOIN spa_proceduros c1 ON p.fk_Spa_Procedura = c1.id_Spa_Procedura", (err, result) => {
      if (err) throw err;
      res.json(result);
    });
    
  });

  route.post("/post-spa-reservation", (req, res) => {


    //res.send( `DELETE FROM spa_rezervacijos WHERE id_Spa_Rezervacija = ${req.body.id}`);
    connection.query(
      "DELETE FROM spa_rezervacijos WHERE ?",
      {
        id_Spa_Rezervacija: req.body.id,
      },
      function (error, results, fields) {
        if (error) throw error;
        res.json({
          success: "Deleted Successfully",
          status: 200,
        });

      }
    );


  });


  route.post("/post-spa-rating", (req, res) => {

    connection.query(
      "INSERT INTO spa_vertinimai SET ?",
      {
        vertinimas: req.body.rating,
        fk_Spa_Rezervacija: req.body.id,
        fk_Spa_Procedura: req.body.P_id,
      },
      function (error, results, fields) {
        if (error) throw error;
        res.json({
          success: "Inserted Successfully",
          status: 200,
        });
      }
    );


  });

  route.post("/add-spa-procedure", (req, res) => {
    //res.send(req.body);

    connection.query(
      "INSERT INTO spa_proceduros SET ?",
      {
        tipas: req.body.tipas,
        pavadinimas: req.body.tekstas,
        fk_Administratoriai: req.body.admin,
      },
      function (error, results, fields) {
        if (error) throw error;
        res.json({
          success: "Inserted Successfully",
          status: 200,
        });

      }
    );


  });

  //remove-procedure
  route.post("/remove-procedure", (req, res) => {


    //res.send( `DELETE FROM spa_rezervacijos WHERE id_Spa_Rezervacija = ${req.body.id}`);
    connection.query(
      "DELETE FROM spa_proceduros WHERE ?",
      {
        pavadinimas: req.body.pav,
      },
      function (error, results, fields) {
        if (error) throw error;
        res.json({
          success: "Deleted Successfully",
          status: 200,
        });

      }
    );


  });

  // const data = {pavadinimas: name, kitasPavadinimas: changeName};
  // edit-procedure
  

  route.post("/edit-procedure", (req, res) => {

      connection.query(
        "UPDATE spa_proceduros SET ? WHERE ?",
        [
          {
          pavadinimas: req.body.kitasPavadinimas,
          },
          {
          pavadinimas: req.body.pavadinimas,
          
        } ],
        function (error, results, fields) {
          if (error) throw error;
          res.json({
            success: "Updated Successfully",
            status: 200,
          });

        }
      );

    });

    route.get("/get-spa-ratings", (req, res) => {
      connection.query("SELECT * FROM spa_vertinimai", (err, result) => {
        if (err) throw err;
        res.json(result);
      });
  
    });
  
};
