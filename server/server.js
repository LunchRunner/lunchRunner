const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

// require in routes:
const usersRouter = require("./routes/usersRouter");
// const postsRouter = require("./routes/postsRouter");
const createError = require("./createError");

const mongoose = require("mongoose");

const app = express();
const uri = process.env.MONGO_URI;
mongoose.connect(uri);

const PORT = 3000;

// parse request body:
app.use(express.json());

// handle static file requests:
app.use(express.static(path.resolve(__dirname, "../public")));

// handle requests to users and posts
app.use("/users", usersRouter);
// app.use("/posts", postsRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send("404: This page is out to lunch"));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = createError({
    log: "Express error handler caught unknown middleware error",
    status: 500,
    err: "An error occurred",
  });
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log); // <-- for devs (keep)
  return res.status(errorObj.status).json(errorObj.message); // <-- for users (would show in postman)
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
