const Session = require("../models/session");

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  try {
    console.log('res.locals.user: ', res.locals.user)
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
    next({
      log: "Error in createSession",
      status: 500,
      message: { err: err },
    });
  }
}

//isLoggedIn Session to check if there is a session that is still valid? 

module.exports = sessionController;
