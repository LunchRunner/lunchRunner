const mongoose = require("mongoose");
const Post = require("./post.js");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date_of_birth: {
    type: Date,
    validate: {
      validator: (v) => validateUserAge(v),
      message: (props) => "User must be at least 18 years old",
    },
    required: [true, "Date of birth is required"],
  },
  email: {
    type: String,
    required: true,
  },
  img_url: String,
  posts: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "post",
    // validate: {
    //   validator: v => validatePostId(v),
    // },
  },
});

function validateUserAge(v) {
  const ageInMs = Date.now() - v.getTime();
  const ageInYears = ageInMs / (1000 * 3600 * 24 * 365.25);
  return ageInYears >= 18;
}

async function validatePostId(v) {
  const res = await Post.find(v);
  if (!res) {
    return false;
  } else {
    return true;
  }
}

const User = mongoose.model("User", userSchema);

module.exports = User;
