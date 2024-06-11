import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    socialMedia: {
      type: String,
      enum: ["TIKTOK", "INSTAGRAM"],
      required: true,
    },

    influencerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Influencer",
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    likes: {
      type: Number,
      required: true,
    },

    comments: {
      type: Number,
      required: true,
    },

    takenAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

postSchema.index({ influencerId: 1, integrationType: 1, takenAt: 1 });
const Post = mongoose.model("Post", postSchema);
export default Post;
