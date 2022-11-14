const sql = require('../models/sql');
const connection = require('../models/db.js');
const Products = require('../models/employees.model.js');

const productControllers = {
  getAllProducts: (req, res) => {
    connection.query(sql.getAllProducts, (error, results) => {
      if (error) {
        return console.error(error.message);
      }
      return res.status(200).json({ message: 'OK', data: results });
    });
    connection.end();
  },
};

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).json({ message: 'Products can noit empty' });
  }

  // Crteate
  const product = new Products({
    productName: req.body.productName,
    productLine: req.body.productLine,
    productScale: req.body.productScale,
    productVendor: req.body.productVendor,
    productDescription: req.body.productDescription,
    quantityInStock: req.body.quantityInStock,
    buyPrice: req.body.buyPrice,
    MSRP: req.body.MSRP,
  });

  // Save to DB
  Products.create(product, (err, data) => {
    if (err) {
      res.status(500).json({
        message:
          err.message || 'Some error occurred while creating the Product',
      });
    }
    else res.status(200).json({data: data, message: "OK"});
  });
};

module.exports = productControllers;
