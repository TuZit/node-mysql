const express = require("express");
const mysql = require("mysql");
require("dotenv").config();
const app = express();

const router = require("./routes");
const productRouter = require("./routes/product");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
});

app.use(router);
app.use(productRouter);

app.listen(4000, () => console.log("App listening on port 4000"));
