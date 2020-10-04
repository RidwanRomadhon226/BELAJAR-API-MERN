const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const blogController = require("../controllers/blog");

// [POST] : /v1/blog/post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Input Title Tidak Sesuai"),
    body("body").isLength({ min: 5 }).withMessage("Input Body Tidak Sesuai"),
  ],
  blogController.createBlogPost
);

module.exports = router;
