import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import catRouter from "./routes/catRoute";

const app = express();
const port = 3005;

app.use(express.json());

dotenv.config();

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/", catRouter);

app.listen(port, () => {
  connectionToDB();
  console.log(`Server started on port: ${port}`);
});
