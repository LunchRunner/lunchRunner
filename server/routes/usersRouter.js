const express = require("express");
const userController = require("../controllers/userController.js");
const sessionController = require("../controllers/sessionController.js");

const usersRouter = express.Router();

usersRouter.post(
  "/createUser",
  userController.createUser,
  sessionController.createSession,
  (req, res, next) => {
    console.log("res.user", res.locals.user);
    const { user, session } = res.locals;
    res.status(200).json({
      user,
      session,
    });
  }
);

usersRouter.post("/login", userController.login, sessionController.createSession, (req, res, next) => {
  console.log('logged in')
  res.status(200).json(res.locals.user.username);
})

module.exports = usersRouter;
