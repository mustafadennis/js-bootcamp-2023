import userModel from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new userModel({
      userName: req.body.userName,
      password: req.body.password,
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
      { userName: req.body.user },
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
