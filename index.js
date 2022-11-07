const express = require("express");
require("dotenv").config();
const app = express();
let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASS,
  database: "classicmodels",
});

app.get("/", (_, res) => {
  const sql = `SELECT * FROM products LIMIT 10`;
  connection.query(sql, (error, results) => {
    if (error) {
      return console.error(error.message);
    }
    return res.status(200).json({ message: "OK", data: results });
  });
  connection.end();
});

app.listen(4000, () => console.log("App listening on port 4000"));
