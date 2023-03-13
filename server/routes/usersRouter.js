const express = require("express");
const userController = require("../controllers/userController");

const usersRouter = express.Router();

usersRouter.post("/createUser", userController.createUser, (req, res, next) => {
  res.status(200).json(res.locals.user);
});

usersRouter.post("/login", userController.login, (req, res, next) => {
  // redirect to main page? 
})

// Commenting out for now - will we ever be making req's just to "user"?

// usersRouter.get("/", (req, res) => { 
//   res.status(200).json({ success: true });
// });

// usersRouter.post("/", (req, res) => {
//   res.status(200).json({ success: true });
// });

module.exports = usersRouter;
