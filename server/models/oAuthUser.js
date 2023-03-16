const mongoose = require('mongoose');

const oAuthUserSchema = new mongoose.Schema({
  githubId: { type: String },
  name: { type: String },
  email: { type: String },
  username: { type: String },
  isOAuth: { type: Boolean, default: false },
});

const OauthUser = mongoose.model('OauthUser', oAuthUserSchema);
module.exports = OauthUser;
