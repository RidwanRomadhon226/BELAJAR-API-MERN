const express = require("express");

const app = express();
const productsRouters = require("./src/routes/products");

app.use("/", productsRouters);

app.listen(4000);
