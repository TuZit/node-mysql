const sql = require("./db.js");

// Contructor
const Products = function (product) {
  this.productCode = product.productCode;
  this.productName = product.productName;
  this.productLine = product.productLine;
  this.productScale = product.productScale;
  this.productVendor = product.productVendor;
  this.productDescription = product.productDescription;
  this.quantityInStock = product.quantityInStock;
  this.buyPrice = product.buyPrice;
  this.MSRP = product.MSRP;
};

Products.create = (newProduct, result) => {
  sql.query("INSERT INTO products SET ?", newProduct, (err, res) => {
    if (err) {
      console.log("error", err);
      result(err, null);
      return;
    }
    console.log("created product: ", { id: res.insertId, ...newProduct });
    result(null, { id: res.insertId, ...newProduct });
  });
};

Products.findById = (productId, result) => {
  sql.query(`SELECT * FROM products WHERE productCode = "${productId}}"`, (err, res) => {
    if (err) {
      console.log(err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found a product", res[0]);
      result("TuZitt", res[0]);
      return;
    }

    // not found employee with the id
    result({ kind: "not_found" }, null);
  });
};

Products.getAll = (result) => {
  sql.query("SELECT * FROM products", (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }
    // console.log('list products', res);
    result(null, res);
  });
};

Products.updateById = (id, product, result) => {
  sql.query(
    "UPDATE products SET productName = ?, buyPrice=?, productVendor=? WHERE productCode = ?",
    [product.productName, product.buyPrice, product.productVendor, id],
    (err, res) => {
      if (err) {
        console.log(err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found employee with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated product: ", { id: id, ...product });
      result(null, { id: id, ...product });
    }
  );
};

Products.deleteById = (id, result) => {
  sql.query("DELETE FROM products WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not found" }, null);
      return;
    }

    console.log("deleted by id: ", id);
    result(null, res);
  });
};

Products.deleteAll = (result) => {
  sql.query("DELETE FROM products", (err, res) => {
    if (err) {
      console.log(err);
      result(null, err);
      return;
    }

    console.log(`Deleted ${res.affectedRows} products`);
    result(null, res);
  });
};

module.exports = Products;
