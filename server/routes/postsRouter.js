const express = require("express");
const postController = require("../controllers/postController");

const postsRouter = express.Router();

// handling get requests to /posts
postsRouter.get("/", postController.getPosts, (req, res) => {
  res.status(200).json(res.locals.posts);
});

// handling post requests to /posts
postsRouter.post("/", postController.createPost, (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = postsRouter;
