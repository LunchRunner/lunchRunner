const express = require("express");
const userController = require("../controllers/userController");
const sessionController = require("../controllers/sessionController");

const usersRouter = express.Router();

usersRouter.post(
  "/createUser",
  userController.createUser,
  sessionController.createSession,
  (req, res, next) => {
    res.status(200).json(res.locals.user);
  }
);

usersRouter.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

usersRouter.post("/", (req, res) => {
  res.status(200).json({ success: true });
});

module.exports = usersRouter;
