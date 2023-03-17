const Post = require("../models/post");

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
      latitude: res.locals.latitude,
      longitude: res.locals.longitude
    });
    res.locals.post = post;
    return next();
  } catch (err) {
    return next({
      log: err,
      status: 500,
      message: { err: "Problem in createPost middleware" }
    });
  }
};

postController.getCoords = async (req, res, next) => {
  const { address } = req.body;
  const fetchStr = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBjcpgA6P733SBM8RAAsgxZJlVb6rZ0_2U`
  fetch(fetchStr)
    .then(data => data.json())
    .then(data => {
      if (!data.results[0].geometry.location.lat || !data.results[0].geometry.location.lng) {
        console.log('Data arrived in unanticipated shape. Data: ', data);
        return next({
          log: 'Error in postController.getCoords --> data arrived in unanticipated shape',
          status: 500,
          message: {err: 'Server error'}
        })
      }
      res.locals.latitude = data.results[0].geometry.location.lat;
      res.locals.longitude = data.results[0].geometry.location.lng;
      return next();
    })
    .catch(err => next({
      log: 'Error in postController.getCoords --> fetch request failed',
      status: 500,
      message: {err}
      })
    )
}

// searches the posts collection for all posts
// returns to client on res.locals.posts
postController.getPosts = async (req, res, next) => {
  console.log('reached')
  try {
    //allPosts = {test: 'get posts'}
    const allPosts = await Post.find({});
    res.locals.posts = allPosts;
    return next();
  } catch (err) {
    return next({
      log: err,
      status: 500,
      message: { err: "Problem in getPosts middleware" }
    });
  }
};

postController.addRunner = async (req, res, next) => {
  try {
    const { username, _id } = req.body;
    console.log('username:', username, 'id', _id)
    Post.findOne({ _id })
      .then((post) => {
        let runnerExists = false;
        // loop through the post.runner array to check if user is already a runner on the post
        for (let i = 0; i < post.runners.length; i++) {
          if (post.runners[i] === username) runnerExists = true;
        }
        //if runner wants to be added to a post and the runner has not been added, update the db to add the runner 
        if (!runnerExists) {
          console.log('runner doesn\'t exist')
          let updatedRunners = [...post.runners, username];
          Post.updateOne({_id}, {runners: updatedRunners})
            .then(post => next())
            .catch(err => {
              return next({
                log: err, 
                status: 500, 
                message: { err: "Error in postController.addRunner --> Post.findOne --> Post.updateOne"}
              })
            })
        }
        // otherwise, if the runner already exists on the runners array, return next without updating the DB
        return next()
      })
  } catch (err) {
    return next({
      log: err, 
      status: 500, 
      message: { err: "problem with addRunner middleware"}
    });
  }
};

module.exports = postController;
