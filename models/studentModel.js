import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    grade: {
      type: Number,
      min: 1,
      max: 10,
      required: true,
    },
    email: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("student", studentSchema);
