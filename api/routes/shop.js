const { Router, Request, Response } = require("express");
const nodemailer = require("nodemailer");
const route = Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "gymminus123@gmail.com",
    pass: "GymMinus000",
  },
});

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
          const mailOptions = {
            from: "gymminus123@gmail.com",
            to: "edgarasnavicaks@gmail.com",
            subject: "Jūsų užsakymas Gym- elektroninėje parduotuvėje",
            html: `<h1 style="text-align:center;">Gym- komanda džiaugiasi, kad užsisakėte prekių mūsų internetinėje parduotuvėje!</h1><p style="text-align:center;">Jūs būtumėte sumokėję tokią sumą, jei mes turėtume atsiskaitymo sistemą: ${req.query.price} €</p>`,
          };
          transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
          res.json("Super");
        });
      }
    );
  });
};
