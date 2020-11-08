const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const fs = require('fs');
const app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("client/build"));
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

http.createServer(app).listen(port, () => {
  console.log(`listening on ${port}`);
});
