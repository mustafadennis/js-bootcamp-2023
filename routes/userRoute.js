import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  updateUser,
} from "../controllers/userController.js";
import express from "express";
import { verifySessionToken } from "../middlewares/authenticationCheck.js";

const router = express.Router();

router.post("/create", createUser);

router.post("/login", loginUser);

router.get("/get-all", getAllUsers);

router.get("/get", verifySessionToken, getUser);

router.delete("/delete", deleteUser);

router.put("/update", updateUser);

export default router;
