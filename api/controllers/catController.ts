import { Request, Response } from "express";
import catModel from "../models/catModel";

export const getAllCats = async (req: Request, res: Response) => {
  try {
    const allCats = await catModel.find({}, { password: 0 });

    res.status(200).json(allCats);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const createCat = async (req: Request, res: Response) => {
  try {
    const cat = await catModel.create(req.body);

    res.status(200).json(cat);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
