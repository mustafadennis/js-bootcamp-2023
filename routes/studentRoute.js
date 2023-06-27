import express from "express";
import {
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudent,
  updateStudent,
} from "../controllers/studentController.js";

const router = express.Router();

router.post("/create", createStudent);

router.get("/get-all", getAllStudents);

router.get("/get/:name", getStudent);

router.delete("/delete/:name", deleteStudent);

router.put("/update/:name", updateStudent);

export default router;
