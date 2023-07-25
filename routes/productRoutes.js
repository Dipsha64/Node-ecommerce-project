const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");

router.route("/all").post(createProduct);

module.exports = router;
