const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    expires: 600,
    default: Date.now,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
