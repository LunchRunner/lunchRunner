const User = require("../models/user");
const createError = require("../createError");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const user = await User.create({
      username: "bc0",
      password: "password",
      firstName: "ben",
      lastName: "cai",
      date_of_birth: new Date(new Date().setFullYear(new Date().getFullYear() - 20)),
      email: "ben@mail.com",
      img_url: "https://cdn-icons-png.flaticon.com/512/456/456212.png",
      posts: [],
    });
    res.locals.user = user;
    next();
  } catch (err) {
    const errorObj = createError({
      log: err,
      status: 500,
      message: { err: "Problem creating a user" },
    });
    next({ errorObj });
  }
};

module.exports = userController;
