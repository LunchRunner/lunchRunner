const Session = require("../models/session");

class SessionController {
  // set two cookies: one with a sessionID that expires, and another with a userID that will expire after each browser session

  async createSession(req, res, next) {
    try {
      const { _id } = res.locals.user;
      const response = await Session.create({
        userId: _id,
        loginTime: Date.now(),
      });
      console.log('sessionid', response);
      res.locals.session = response;
      console.log('inside session controller')
      res.cookie('sessionId', response._id, { maxAge: 86400000 });
      res.cookie('userId', response.userId);
      next();
    } catch (err) {
      next({ message: 'error in createSession' });
    }
  }
  //isLoggedIn Session to check if there is a session that is still valid? 




}

const sessionController = new SessionController();

module.exports = sessionController;
