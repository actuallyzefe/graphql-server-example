import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema(
  {
    main: {
      type: String,
      required: true,
    },

    hexCode: {
      type: String,
      required: true,
    },

    code: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const productSchema = new Schema(
  {
    attributes: [
      {
        key: { type: String, required: true },
        value: { type: String, required: true },
        _id: false,
      },
    ],

    colors: {
      type: [colorSchema],
      required: true,
    },

    clothe: {
      type: String,
      required: true,
    },

    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Post",
    },
  },

  { timestamps: true }
);

productSchema.index({ postId: 1, clothe: 1 });
const Product = mongoose.model("Product", productSchema);

export default Product;
