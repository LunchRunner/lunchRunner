const oAuthUser = require('../models/oAuthUser');
const dotenv = require('dotenv');
const axios = require('axios');
dotenv.config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const oAuthController = {};

oAuthController.exchangeCode = (req, res, next) => {
  // console.log('req params: ', req.params);
  // console.log('req body: ', req.body);
  // console.log('req query: ', req.query);
  const { code } = req.query;
  const body = { client_id, client_secret, code };
  const config = { headers: { accept: 'application/json' } };
  axios
    .post(`https://github.com/login/oauth/access_token`, body, config)
    .then((response) => {
      // console.log('access token: ', response.data['access_token']);
      // console.log('response.data: ', response.data);
      // console.log("code", code);
      res.locals.token = response.data['access_token'];
      return next();
    })
    .catch(err => {
      return next({
        log: 'Error in exchangeCode --> axios.post',
        status: 500,
        message: { err: 'OAuth error.' },
      });
    });
};

oAuthController.getUserDetails = (req, res, next) => {
  axios
    .get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${res.locals.token}` },
    })
    .then((response) => {
      const { id, login, email, name } = response.data;
      console.log('response.data from getUserDetails: ', response.data);
      //look in the database for user w/ same OAuth ID as the GitHub user
      oAuthUser
        .findOne({ githubId: id })
        .then((user) => {
          console.log('this is a user in my oAuthUser fineOne', user);
          // user not found with the same oAuth Id
          if (!user) {
            const newUser = new oAuthUser({
              email,
              isOAuth: true,
              githubId: id,
              username: login,
              name,
            });
            newUser
              .save()
              .then((user) => {
                console.log('new oAuth user is created', user);
                res.locals.userId = user._id;
                return next();
              })
              .catch(err => {
                return next({
                  log: 'Error in exchangeCode --> newUser.save',
                  status: 500,
                  message: { err: 'Could not create new user.' },
                });
              });
          } else {
            console.log('User already exists:', user);
            res.locals.userId = user._id;
            return next();
          }
        })
        .catch(err => {
          return next({
            log: 'Error in exchangeCode --> User.findOne',
            status: 500,
            message: { err: 'Could not find user.' },
          });
        });
    })
    .catch(err => {
      return next({
        log: 'Error in getUserDetails --> axios.get',
        status: 500,
        message: { err: 'Oauth error' },
      });
    });
};

module.exports = oAuthController;
