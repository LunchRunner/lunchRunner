const express = require("express");
const userController = require("../controllers/userController");

const usersRouter = express.Router();

usersRouter.post("/createUser", userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post("/login", userController.login, (req, res, next) => {
  res.status(200).json(res.locals.userId);
})

module.exports = usersRouter;
