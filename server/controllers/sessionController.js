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
    res.cookie('session', _id);
    return next();
  } catch (err) {
    next({
      log: "Error in createSession",
      status: 500,
      message: { err: err },
    });
  }
}

// verify if the current session cookie is still valid (i.e., a corresponding session still exists in the DB)
sessionController.verifySession = async (req, res, next) => {
  try {
    // look for a session document with a userId matching the session cookie
    Session.findOne({ userId: req.cookies.session })
      .then(results => {
        // if nothing comes back, assign the isVerified flag to false
        if (results === null) {
          res.locals.isVerified = false;
          return next();
        }
        // otherwise assign the isVerified flag to true
        else {
          res.locals.isVerified = true;
          return next();
        }
      })
      // error handling for the DB query
      .catch(err => next({
        log: 'Error in sessionController.verifySession --> Session.findOne',
        status: 500,
        message: {err: 'Server error.'},
      }))
  // general error handling
  } catch(err) {
    if (err) return next({
      log: 'Error in sessionController.verifySession --> catch block',
      status: 500,
      message: {err},
    });
  };
};

module.exports = sessionController;
