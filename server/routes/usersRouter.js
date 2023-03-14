const express = require("express");
const userController = require("../controllers/userController.js");
const sessionController = require("../controllers/sessionController.js");

const usersRouter = express.Router();

usersRouter.post(
  "/createUser",
  userController.createUser,
  sessionController.createSession,
  (req, res, next) => {
    console.log("resuser", res.locals.user);
    const { user, session } = res.locals;
    res.status(200).json({
      user,
      session,
    });
  }
);

// TO DO: add session/cookies middleware ()
usersRouter.post("/login", userController.login, sessionController.createSession, (req, res, next) => {
  res.status(200).json(res.locals.username);
})

module.exports = usersRouter;
