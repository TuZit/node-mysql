const express = require("express");
const router = express.Router();
const productControllers = require("../controllers/productControllers");

// Create new product
router.post("/products", productControllers.create);

// Get All Product
router.get("/products", productControllers.findAll);

// Get a single Product
router.get("/products/:id", productControllers.findOne);

// Update a product with ID
router.put("/products/:id", productControllers.update);

// Delete a product with ID
router.delete("/products/:id", productControllers.delete);

// Delete All
router.delete("/products", productControllers.deleteAll);

module.exports = router;
