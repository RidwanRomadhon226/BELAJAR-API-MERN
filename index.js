const express = require("express");

const app = express();
const router = express.Router();

router.use("/products", (req, res, next) => {
  res.json({ name: "Ridwan ROmadhon", email: "endan@gmail.com" });
  next();
});

router.use("/price", (req, res, next) => {
  res.json({ price: 20000 });
  next();
});

router.delete("/customers", (req, res, next) => {
  res.json({ title: "coustomers" });
  next();
});

app.use("/", router);

app.listen(4000);
