const express = require('express');
const oauthRouter = express.Router();
const dotenv = require("dotenv");
const axios = require('axios');
dotenv.config();

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const exchangeCode = (req, res, next) => {
  // console.log('req params: ', req.params);
  // console.log('req body: ', req.body);
  // console.log('req query: ', req.query);
  const { code } = req.query;
  const body = { client_id, client_secret, code };
  const config = {headers: {accept: 'application/json'}};
  axios.post(`https://github.com/login/oauth/access_token`, body, config)
    .then(response => {
      console.log('access token: ', response.data['access_token']);
      console.log('response.data: ', response.data);
      console.log("code", code);
      res.locals.token = response.data['access_token'];
      return next();
    })
    .catch(err => {
      return next({
        log: 'Error in exchangeCode --> axios.post',
        status: 500,
        message: {err: 'OAuth error.'}
      })
    })
}

const getUserDetails = (req, res, next) => {
  axios.get('https://api.github.com/user', {headers: {Authorization: `Bearer ${res.locals.token}`}})
    .then(response => {
      console.log('response.data from getUserDetails: ', response.data);
      res.locals.gitInfo = response.data;
      return next();
    })
    .catch(err => {
        return next({
            log: "Error in getUserDetails --> axios.get",
            status: 500, 
            message: {err : "Oauth error"}
        })
    })
}

oauthRouter.get('/', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${client_id}`);
});

oauthRouter.get('/token', exchangeCode, getUserDetails, (req, res) => {
  res.redirect('/');
})

module.exports = oauthRouter;