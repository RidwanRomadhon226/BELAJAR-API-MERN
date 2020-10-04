const { response } = require("express");
const { validationResult } = require("express-validator");
const BlogPost = require("../models/blog");

exports.createBlogPost = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const err = new Error("Invalid value Tidak Sesuai ");
    err.errorStatus = 400;
    err.data = errors.array();
    throw err;
  }

  if (!req.file) {
    const err = new Error("Image Harus Di Upload");
    err.errorStatus = 422;
    err.data = errors.array();
    throw err;
  }

  const title = req.body.title;
  const body = req.body.body;
  const image = req.file.path;

  const Posting = new BlogPost({
    title: title,
    body: body,
    image: image,
    author: { uid: 1, name: "Ridwan Romadhon" },
  });

  Posting.save()
    .then((result) => {
      res.status(201).json({
        messages: "Success Blog Post",
        data: result,
      });
    })
    .catch((err) => console.log("err:", err));
};
