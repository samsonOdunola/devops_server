const { getproducts } = require("../controllers/product.controller");
const express = require("express");
const router = express.Router();

router.get("/products", getproducts);

module.exports = router;
