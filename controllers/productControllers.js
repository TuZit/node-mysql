const Products = require("../models/employees.model.js");

exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).json({ message: "Product input can not empty" });
  }

  // Crteate
  const product = new Products({
    productCode: req.body.productCode,
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
          err.message || "Some error occurred while creating the Product",
      });
    } else res.status(200).json({ data: data, message: "Created Product" });
  });
};

// Find All
exports.findAll = (req, res) => {
  Products.getAll((err, data) => {
    if (err) {
      res.status(500).json({
        message: err.message || "Some error occurred while retrueving",
      });
    }
    return res.json({ data: data });
  });
};

// Find One
exports.findOne = (req, res) => {
  Products.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(400).json({
          message: `Not found Product with productCode ${req.params.id}.`,
        });
      } else {
        res.status(500).json({
          message: `Error retrieving Product with productCode ${req.params.id}.`,
        });
      }
    }
    else res.status(200).json({ data: data });
  });
};

// Update Product
exports.update = (req, res) => {
  // validate resquest
  if (!req.body) {
    res.status(400).json({ message: "Content can not be empty" });
  }
  Products.updateById(req.body.id, new Products(req.body), (err, data) => {
    if (err) {
      if ((err.kind = "not_found")) {
        res.status(404).json({ message: err.message || "Not found product" });
      } else {
        res.status(500).json({ message: "Error updating product" });
      }
    }
    return res.status(200).json({ data: data });
  });
};

// Delete product by ID
exports.delete = (req, res) => {
  Products.deleteById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind == "not_found") {
        res.status(404).json({ message: "Not found product" });
      } else {
        res.status(500).json({ message: "Could not delete product" });
      }
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  });
};

// Delete all products
exports.deleteAll = (req, res) => {
  Products.deleteAll((err, data) => {
    if (err) {
      res.status(500).json({ message: err.message || "Some error occurred" });
    }
    return res.status(200).json({ data: data });
  });
};
