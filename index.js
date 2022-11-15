const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const router = require("./routes");
const productRouter = require("./routes/product");

app.use(productRouter);

app.listen(4000, () => console.log("App listening on port 4000"));
