const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// const productsRouters = require("./src/routes/products");
const authRouters = require("./src/routes/auth");
const blogRouters = require("./src/routes/blog");

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

// app.use("/v1/customers/", productsRouters);
app.use("/v1/auth/", authRouters);
app.use("/v1/blog/", blogRouters);

app.use((error, req, res, next) => {
  const status = error.errorStatus || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({
    message: message,
    data: data,
  });
});

app.listen(4000);
