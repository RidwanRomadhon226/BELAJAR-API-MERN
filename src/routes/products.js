const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products");

// create - >post
router.post("/product", productsController.createProduct);

// create - > Get Data

router.get("/products", productsController.getAllProducts);

// router.put("/products", productsController.getAllProducts);

// router.delete("/products", (req, res, next) => {
//   res.json({ name: "Ridwan ROmadhon", email: "endan@gmail.com" });
//   next();
// });

module.exports = router;
