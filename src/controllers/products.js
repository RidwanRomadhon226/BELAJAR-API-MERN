exports.createProduct = (req, res, next) => {
  // console.log("request :", req.body);

  const name = req.body.name;
  const price = req.body.price;

  res.json({
    messages: "Created Product",
    data: {
      id: 1,
      name: name,
      price: price,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    messages: "Get All Product",
    data: {
      id: 1,
      name: "SunGlases",
      price: 2000,
    },
  });
  next();
};
