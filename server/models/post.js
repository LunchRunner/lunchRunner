const mongoose = require("mongoose");

const timeStamps = {
  createdAt: "created_at",
};

const postSchema = new mongoose.Schema(
  {
    placeId: String,
    // {
    //   type: mongoose.Schema.Types.ObjectId,
    // },
    expirationTime: String,
    owner: String,
    // {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    tags: [
      {
        timeOfTag: {
          type: Date,
          default: () => Date.now,
        },
        tagger: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
  },
  { timeStamps }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
