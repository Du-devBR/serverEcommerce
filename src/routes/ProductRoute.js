const express = require("express");
const router = express.Router();

const ProductController = require("../controller/ProductController");

router.get("/products", ProductController.getAllProducts);

router.get("/product/:id", ProductController.getProductById);

router.post("/products", ProductController.creteproduct);

router.put("/product/:id", ProductController.updateProducts);

router.delete("/product/:id", ProductController.deleteProduct);

module.exports = router;
