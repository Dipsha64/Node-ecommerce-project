const express = require("express");
const router = express.Router();
const { createProduct, projectAllGet } = require("../controllers/productController");

router.route("/add").post(createProduct);
router.route("/all").get(projectAllGet);

module.exports = router;
