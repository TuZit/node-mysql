const sql = require("../models/sql");
const connection = require("../models/db.js");

const productControllers = {
  getAllProducts: (req, res) => {
    connection.query(sql.getAllProducts, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.status(200).json({ message: "OK", data: results });
    });
    connection.end();
  },
};

module.exports = productControllers;
