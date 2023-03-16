const mongoose = require("mongoose");

const timeStamps = {
  createdAt: "created_at",
};

const postSchema = new mongoose.Schema(
  {
    placeId: String,
    expirationTime: {type: Date, expires: 5 },
    owner: String,
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
// postSchema.createIndex({expirationTime:1},{expireAfterSeconds:10})
const Post = mongoose.model("Post", postSchema);

module.exports = Post;
