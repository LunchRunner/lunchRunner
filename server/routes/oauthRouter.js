const express = require('express');
const oAuthController = require('../controllers/oAuthController.js');
const oauthRouter = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const client_id = process.env.CLIENT_ID;

oauthRouter.get('/', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${client_id}`
  );
});

//Users are redirected back to your site by GitHub to the callback /token page
oauthRouter.get(
  '/token',
  oAuthController.exchangeCode,
  oAuthController.getUserDetails,
  (req, res) => {
    res.redirect('/');
  }
);

module.exports = oauthRouter;
