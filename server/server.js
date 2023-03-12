const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// require in routes:
const usersRouter = require('./routes/usersRoute')
const postsRouter = require('./routes/postsRoute')

// parse request body:
app.use(express.json());

// handle static file requests:
app.use(express.static(path.resolve(__dirname, '../public')));

// handle requests to users and posts
app.use('/users', usersRouter); 
app.use('/posts', postsRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('404: This page is out to lunch'));

// global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log); // <-- for devs (keep)
    return res.status(errorObj.status).json(errorObj.message); // <-- for users (would show in postman)
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

module.exports = app;
