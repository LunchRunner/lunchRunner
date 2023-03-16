const Session = require("../models/session");

const sessionController = {};

sessionController.createSession = async (req, res, next) => {
  try {
    // console.log('res.locals.user: ', res.locals.user)
    const { _id } = res.locals.user;
    const response = await Session.create({
      userId: _id,
      createdAt: Date.now(),
    });
    // console.log('sessionid', response);
    res.locals.session = response;
    // console.log('inside session controller')
    res.cookie('session', response.userId);
    return next();
  } catch (err) {
    next({
      log: "Error in createSession",
      status: 500,
      message: { err: err },
    });
  }
}

sessionController.verifySession = async (req, res, next) => {
  try {
    Session.findOne({ userId: req.cookies.session })
      .then(results => {
        if (results === null) return next({
          log: 'Error in sessionController.verifySession --> Session.findOne',
          status: 500,
          message: {err: 'Server error.'},
        });
        return next();
      });
  } catch(err) {
    if (err) return next({
      log: 'Error in sessionController.verifySession --> catch block',
      status: 500,
      message: {err},
    });
  };
};

module.exports = sessionController;
