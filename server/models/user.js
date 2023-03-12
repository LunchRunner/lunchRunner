const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date_of_birth: {
    type: Date,
    validate: {
      validator: function (v) {
        const ageInMs = Date.now() - v.getTime();
        const ageInYears = ageInMs / (1000 * 3600 * 24 * 365.25);
        return ageInYears >= 18;
      },
      message: (props) => "User must be at least 18 years old",
    },
    required: [true, "Date of birth is required"],
  },
  email: {
    type: String,
    required: true,
  },
  img_url: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      validate: {
        validator: async function (v) {
          try {
            const res = await Post.findById(v);
            res(false);
          } catch (err) {
            rej(true);
          }
        },
      },
    },
  ],
});

async function validatePostId(v) {
  const res = await Post.find(v);
  if (!res) {
  }
}

const User = mongoose.model("User", userSchema);

module.exports = User;
