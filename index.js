const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const productsRouters = require("./src/routes/products");
const authRouters = require("./src/routes/auth");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,PATCH,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/v1/customers/", productsRouters);
app.use("/v1/auth/", authRouters);

app.listen(4000);
