const express = require('express')
const postController = require("../controllers/postController")

const postsRouter = express.Router();

// handling get requests to /posts
// sending to getPosts middleware
// sending results back on res.locals
postsRouter.get('/', postController.getPosts, (req, res) => {
    console.log('testing posts get')
    console.log(res.locals.posts)
    res.status(200).json(res.locals.posts); 
})

// handling post requests to /posts
// use to send post to database <-- not sure how this happens
// passes to createPost middleware
// sending back success
postsRouter.post('/', postController.createPost, (req, res) => { 
    console.log('testing posts post')
    res.status(200).json({success: true}); 
})

module.exports = postsRouter;