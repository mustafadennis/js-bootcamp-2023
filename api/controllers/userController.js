import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const loginUser = async (req, res) => {
  try {
    const foundUser = await userModel.findOne({ userName: req.body.userName });

    if (!foundUser) {
      return res.status(404).send("Username or Password is wrong!");
    }

    const isUserPasswordCorrect = bcrypt.compareSync(
      req.body.password.toString(),
      foundUser.password
    );

    if (!isUserPasswordCorrect) {
      return res.status(404).send("Username or Password is wrong!!");
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res
      .cookie("session_token", token, {
        httpOnly: true,
      })
      .status(200)
      .send(token);
  } catch (error) {
    console.log("🚀 ~ error:", error);
  }
};

export const createUser = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password.toString(), salt);
    const newUser = new userModel({
      ...req.body,
      password: hashedPassword,
      isAdmin: false,
    });

    await newUser.save();

    const { password, ...remainingUserData } = newUser._doc;

    res.status(201).json(remainingUserData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find({}, { password: 0 });

    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const deleteAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.deleteMany({});

    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
export const getUser = async (req, res) => {
  try {
    const user = await userModel.findOne(
      { userName: req.body.userName },
      { password: 0 }
    );

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userModel.findOneAndDelete({
      userName: req.body.userName,
    });

    const { password, ...remainingUserData } = deletedUser._doc;

    res.status(200).json(remainingUserData);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await userModel.findOneAndUpdate(
      { userName: req.params.userName },
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

export const verifySession = async (req, res) => {
  try {
    const user = await userModel.findOne(
      { userName: req.body.userName },
      { password: 0 }
    );
    console.log("🚀 ~ user:", user);

    res.status(200).json(!!user);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
