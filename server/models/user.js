const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: {
    firstName: String,
    lastName: String,
  },
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
    require: true,
  },
  img_url: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
      validate: {
        validator: function (v) {
          return new Promise((res, rej) => {
            Post.findById(v, function (err, user) {
              if (err || !user) {
                resolve(false);
              } else {
                resolve(true);
              }
            });
          });
        },
      },
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
