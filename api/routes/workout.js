const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/workout", route);

  // get programs which were created by admins (trainers)
  route.get("/programs", (req, res) => {
    connection.query("SELECT * FROM sporto_programos", (err, result) => {
      if (err) throw err;
      res.json(result);
    });
  });

  // get single program exercise list
  route.get("/programs/:id", (req, res) => {
    connection.query(
      `SELECT * FROM sporto_pratimai WHERE fk_Sporto_Programa_prat = ${req.params.id}`,
      (err, result) => {
        if (err) throw err;
        res.json(result);
      }
    );
  });

  // add single program
  route.post("/programs", (req, res) => {
    // res.send(`INSERT VALUE ${req.body.name}`);
    let new_id = -1;
    connection.query(
      "INSERT INTO sporto_programos SET ?",
      {
        pavadinimas: req.body.pavadinimas,
        sunkumas: req.body.sunkumas,
        aprasymas: req.body.aprasymas,
        trukmeMin: req.body.trukmeMin,
        tipas: req.body.tipas,
        fk_Vartotojas: req.body.fk_Vartotojas,
        fk_Treneriai: req.body.fk_Treneriai,
      },
      function (error, results, fields) {
        if (error) throw error;
        new_id = results.insertId;

        for (let index = 0; index < req.body.pratimai.length; index++) {
          const element = req.body.pratimai[index];
          con.query(
            "INSERT INTO sporto_pratimai SET ?",
            {
              pavadinimas: element,
              fk_Sporto_Programa_prat: new_id,
            },
            function (error, results, fields) {
              if (error) throw error;
              // res.json({
              //   success: "Exercise Inserted Successfully",
              //   status: 200,
              // });
            }
          );
        }

        res.json({
          success: "Inserted Successfully",
          status: 200,
          inserted_id: results.insertId,
          exe: req.body.exercises,
        });
      }
    );

    // connection.query(
    //   "INSERT INTO sporto_pratimai SET ?",
    //   {
    //     pavadinimas: req.body.exercises[0],
    //     fk_Sporto_Programa_prat: inserted_id,
    //   },
    //   function (error, results, fields) {
    //     if (error) throw error;
    //     inserted_id = results.insertId;
    //     res.json({
    //       success: "Exercise Inserted Successfully",
    //       status: 200,
    //     });
    //   }
    // );
  });
};
