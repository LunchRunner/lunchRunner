const Post = require("../models/post");
const createError = require("../createError");

const postController = {};

// creates new post and stores on res.locals.post
postController.createPost = async (req, res, next) => {
    try {
        const post = await Post.create({
            placeId : req.body.placeId, 
            expirationTime: req.body.expirationTime, 
            owner: req.body.owner, 
        })
        res.locals.post = post;
        next();
    } catch (err) {
        const errorObj = createError({
            log: err,
            status: 500,
            message: { err: "Problem in createPost middleware" },
          });
          next({ errorObj });
    }
};

// searches the posts collection for all posts 
// returns to client on res.locals.posts
postController.getPosts = async (req, res, next) => {
    try {
        const allPosts = await Post.find({})
        res.locals.posts = allPosts;
        next();
    } catch (err) {
        const errorObj = createError({
            log: err,
            status: 500,
            message: { err: "Problem in getPosts middleware" },
          });
        next({ errorObj });
    }

}

module.exports = postController;
