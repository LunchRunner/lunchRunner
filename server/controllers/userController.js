const User = require("../models/user.js");
const createError = require("../createError.js");
const bcrypt = require('bcrypt');

function mock20YrOld() {
  return new Date(new Date().setFullYear(new Date().getFullYear() - 20));
}

const userController = {}; 

userController.createUser = async (req, res, next) => {
  const { username, password, firstName, lastName, date_of_birth, email } = req.body;
  console.log("reqbody", req.body);

  //check if user exists
  const userExists = await User.findOne({ username, email });
  // User Auth
  if (userExists) {
    return next({
      log:'user already exists',
      status: 500,
      message: { err: 'user already exists' },
    });
  }

  try {
    // hash the password using bcrypt
    bcrypt.hash(password, 10, async (err, hash) => {
      if (err) return next({
        log: "Error in userController.createUser middleware - bcrypt hash",
        status: 500,
        message: { err: "An error occurred" },
      })
      console.log('hash: ', hash)
      // hashedPassword = hash;
      // create a user with the hashed password
      const user = await User.create({
        username,
        password: hash,
        firstName,
        lastName,
        date_of_birth,
        email,
        img_url: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
        posts: [],
      });
      res.locals.user = user;
      return next();
    });
  } catch (err) {
    return next({
      log: 'Error in the userController.createUser middleware - create user in DB',
      status: 500,
      message: { err: "Problem creating a user" },
    });
  };
};

userController.login = async (req, res, next) => {
  try {
    console.log('login req.body:', req.body)
    const { username, password } = req.body;

    // compare user's hashed password in DB to unhashed password from front-end input
    User.findOne({username: username})
    .then(user => {
      bcrypt.compare(password, user.password, (err, result) => {
        // if bcrypt returns an error
        if (err) return next({
          log: 'Error in the userController.login middleware - bcrypt compare',
          status: 500,
          message: { err: "Problem verifying a user" },
        });
        // if the passwords don't match
        if (!result) return next({
          log: 'Error in the userController.createUser middleware - password doesn\'t match',
          status: 500,
          message: { err: "Your password is incorrect." },
        });
        // if the passwords match
        console.log('login user:', user)
        res.locals.user = user; 
        return next();
      })
    })
  } catch (err) {
    next({
      log: 'Error in the userController.login middleware - catch',
      status: 500,
      message: { err: "Problem logging in" },
    });
  }
}

module.exports = userController;
