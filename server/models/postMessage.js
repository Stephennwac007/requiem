import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  dislikeCount: {
    type: Number,
    default: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
 