const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: Object.Types.ObjectId,
    ref: "User",
    required: true,
  },
  loginTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  logoutTime: {
    type: Date,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
