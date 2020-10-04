const { response } = require("express");
const { validationResult } = require("express-validator");

exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  const body = req.body.body;
  // const image = req.body.image;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid value Tidak Sesuai ");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  const result = {
    messages: "Success Blog Post",
    data: {
      post_id: 1,
      title: title,
      image: "image.png",
      body: body,
      created_at: "2020-11-20",
      author: {
        udi: 1,
        name: "Testing",
      },
    },
  };

  res.status(201).json(result);
};
