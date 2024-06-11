import mongoose, { Schema } from "mongoose";

const influencerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },
  },
  { timestamps: true }
);

influencerSchema.index({ name: 1, surname: 1, nickname: 1 });
const Influencer = mongoose.model("Influencer", influencerSchema);
export default Influencer;
