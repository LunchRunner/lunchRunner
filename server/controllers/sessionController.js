const Session = require("../models/session");

class SessionController {
  // set cookies
  async createSession(req, res, next) {
    try {
      const { _id: userId } = res.locals.user;
      const response = await Session.create({
        userId,
        loginTime: Date.now(),
      });
      console.log("sessionid", response);
      res.locals.session = response;
      next();
    } catch (err) {
      next({ message: err });
    }
  }
}

const sessionController = new SessionController();

module.exports = sessionController;
