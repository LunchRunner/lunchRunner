const mongoose = require("mongoose");

const timeStamps = {
  createdAt: "created_at",
};

const postSchema = new mongoose.Schema(
  {
    placeId: String,
    // placeId: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Place",
    // },
    // expirationTime: String,
    expirationTime: Date,
    owner: String,
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    runners: Array,
    latitude: String,
    longitude: String,
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
