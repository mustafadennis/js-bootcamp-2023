import mongoose from "mongoose";
import express from "express";
import studentRoute from "./routes/studentRoute.js";

const app = express();
const port = 3005;

app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.ruiqf.mongodb.net/students"
    );
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/student", studentRoute);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port: ${port}`);
});
