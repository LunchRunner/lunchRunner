const express = require("express");
const postController = require("../controllers/postController.js");

const postsRouter = express.Router();

// handling get requests to /posts
postsRouter.get("/", postController.getPosts, (req, res) => {
  res.status(200).json(res.locals.posts);
});

// handling post requests to /posts
postsRouter.post("/", postController.createPost, (req, res) => {
  res.status(200).json({ success: true });
});

postsRouter.post('/addRunner', postController.addRunner, postController.getPosts, (req, res) => {
  res.status(200).json(res.locals.posts)
});

module.exports = postsRouter;
