import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  loginUser,
  updateUser,
  verifySession,
} from "../controllers/userController.js";
import express from "express";
import { verifySessionToken } from "../middlewares/authenticationCheck.js";

const router = express.Router();

router.post("/create", createUser);

router.post("/login", loginUser);

router.post("/verify-session", verifySession);

router.get("/get", verifySessionToken, getUser);

router.delete("/delete", verifySessionToken, deleteUser);

router.put("/update/:userName", verifySessionToken, updateUser);

router.get("/get-all", verifySessionToken, getAllUsers); //ADMINS

router.delete("/delete-all", verifySessionToken, getAllUsers); //ADMINS

export default router;
