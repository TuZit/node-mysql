const express = require("express");
require("dotenv").config();
const app = express();
let mysql = require("mysql");

const router = require("./routes");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

app.get("/products", (_, res) => {
  const sql = `SELECT * FROM products LIMIT 10`;
  connection.query(sql, (error, results) => {
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(200).json({ message: "OK", data: results });
  });
  connection.end();
});

// app.use(router);

app.listen(4000, () => console.log("App listening on port 4000"));
