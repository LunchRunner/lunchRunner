const express = require("express");
const userController = require("../controllers/userController");

const usersRouter = express.Router();

usersRouter.post("/createUser", userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

usersRouter.get("/", (req, res) => {
  console.log("testing users get");
  res.status(200).json({ success: true });
});

usersRouter.post("/", (req, res) => {
  console.log("testing users post");
  res.status(200).json({ success: true });
});

module.exports = usersRouter;