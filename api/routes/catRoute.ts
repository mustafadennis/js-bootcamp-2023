import { createCat, getAllCats } from "../controllers/catController";
import express from "express";

const router = express.Router();

router.get("/get", getAllCats);

router.post("/create", createCat);

export default router;
