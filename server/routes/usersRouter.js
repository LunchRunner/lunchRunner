const express = require("express");
const userController = require("../controllers/userController");
const sessionController = require("../controllers/sessionController");

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

usersRouter.post("/login", userController.login, (req, res, next) => {
  res.status(200).json(res.locals.userId);
})

module.exports = usersRouter;
