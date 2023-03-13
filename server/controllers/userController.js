const User = require("../models/user");
const createError = require("../createError");

function mock20YrOld() {
  return new Date(new Date().setFullYear(new Date().getFullYear() - 20));
}

const userController = {}; 

userController.createUser = async (req, res, next) => {
  const { username, password, firstName, lastName, date_of_birth, email } = req.body;
  try {
    const user = await User.create({
      username,
      password,
      firstName,
      lastName,
      date_of_birth,
      email,
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

userController.login = async(req, res, next) => {
  try {

    // loggin in lol

  } catch (err) {
    const errorObj = createError({
      log: err,
      status: 500,
      message: { err: "Problem logging in" },
    });
    next({ errorObj });
  }
}

module.exports = userController;
