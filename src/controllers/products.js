exports.createProduct = (req, res, next) => {
  res.json({
    messages: "Created Product",
    data: {
      id: 1,
      name: "Baju",
      price: 2000,
    },
  });
  next();
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    messages: "Get All Product",
    data: {
      id: 1,
      name: "Baju",
      price: 2000,
    },
  });
  next();
};
