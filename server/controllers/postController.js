const Post = require("../models/post");
const createError = require("../createError");

const postController = {};

// creates new post and stores on res.locals.post
// how does this then go int othe database?
postController.createPost = async (req, res, next) => {
  try {
    //const post = {test: 'create post'}
    console.log(req.body);
    const post = await Post.create({
      placeId: req.body.placeId, // <-- we're pretty sure the schema is not enforced and this can be a string
      expirationTime: req.body.expirationTime, // <-- when they're going (check w frontend about entering date)
      owner: req.body.owner, //<-- connects to current user by ID (won't need frontend field)
    });
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
    //allPosts = {test: 'get posts'}
    const allPosts = await Post.find({});
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
};

module.exports = postController;
