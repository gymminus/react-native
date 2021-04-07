const { Router, Request, Response } = require("express");
const route = Router();

module.exports = (app, connection) => {
  app.use("/workout", route);

  // get programs which were created by admins (trainers)
  route.get("/programs", (req, res) => {
    connection.query("SELECT * FROM sporto_programos", (err, result) => {
      if (err) console.log(err);
      res.json(result);
    });
  });

  // get single program exercise list
  route.get("/programs/:id", (req, res) => {
    connection.query(
      `SELECT * FROM sporto_pratimai WHERE fk_Sporto_Programa_prat = ${req.params.id}`,
      (err, result) => {
        if (err) console.log(err);
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
        if (error) console.log(error);
        new_id = results.insertId;

        for (let index = 0; index < req.body.pratimai.length; index++) {
          const element = req.body.pratimai[index];
          connection.query(
            "INSERT INTO sporto_pratimai SET ?",
            {
              pavadinimas: element,
              fk_Sporto_Programa_prat: new_id,
            },
            function (error, results, fields) {
              if (error) console.log(error);
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
  });

  // update single program
  route.post("/programs-update", (req, res) => {
    // res.send(`INSERT VALUE ${req.body.name}`);
    connection.query(
      "UPDATE sporto_programos SET ? WHERE id_Sporto_Programa = ?",
      [
        {
          pavadinimas: req.body.pavadinimas,
          sunkumas: req.body.sunkumas,
          aprasymas: req.body.aprasymas,
          trukmeMin: req.body.trukmeMin,
        },
        req.body.id_Sporto_Programa,
      ],
      function (error, results, fields) {
        if (error) console.log(error);

        // res.json({
        //   success: "Updated Successfully",
        //   status: 200,
        //   pratimai: req.body.pratimai,
        //   old: req.body.pratimai_old,
        // });

        for (let index = 0; index < req.body.pratimai.length; index++) {
          let element = req.body.pratimai[index];
          let old_element = req.body.pratimai_old[index];
          connection.query(
            `UPDATE sporto_pratimai SET pavadinimas = '${element}' WHERE pavadinimas = '${old_element}' AND fk_Sporto_Programa_prat = ${req.body.id_Sporto_Programa}`,
            function (error, results, fields) {
              if (error) console.log(error);
              // res.json({
              //   success: "Exercise Inserted Successfully",
              //   status: 200,
              // });
            }
          );
        }
        res.json({
          success: "Updated Successfully",
          status: 200,
          fk_sport: req.body.id_Sporto_Programa,
          pratimai: req.body.pratimai,
          old: req.body.pratimai_old,
        });
      }
    );
  });

  // update single program
  route.post("/programs-delete", (req, res) => {
    connection.query(
      `DELETE FROM sporto_programos WHERE id_Sporto_Programa = ${req.body.id}`,
      function (error, results, fields) {
        if (error) console.log(error);

        res.json({
          success: "Deleted Successfully",
          status: 200,
          id: req.body.id,
        });
      }
    );
  });

  // get program rating
  route.get("/programs-rating/:id", (req, res) => {
    connection.query(
      `SELECT AVG(vertinimas) as average FROM programos_vertinimai WHERE fk_Sporto_Programa = ${req.params.id}`,
      function (error, results, fields) {
        if (error) console.log(error);
        res.json(results);
      }
    );
  });

  // get program rating
  route.post("/programs-rating", (req, res) => {
    connection.query(
      `INSERT INTO programos_vertinimai SET ?`,
      {
        vertinimas: req.body.rating,
        fk_Sporto_programa: req.body.workoutID,
        fk_Vartotojo_id: req.body.userID,
      },
      function (error, results, fields) {
        if (error) console.log(error);
        res.json({
          status: 200,
        });
      }
    );
  });
};
