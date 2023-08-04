import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    nickname: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    hasOwner: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("cat", catSchema);
