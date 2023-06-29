import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const verifyUser = (req, res, next, userName) => {
  if (req.body.userName === userName) {
    return next();
  }
  return res.status(400).send("You are not authorized!");
};

const verifyAdmin = (res, next, user) => {
  if (user?.isAdmin) {
    return next();
  }
  return res.status(400).send("You are not authorized!");
};

export const verifySessionToken = (req, res, next) => {
  const token = req.body.session_token;

  if (!token) {
    return res.status(401).send("Not authorized!");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    if (err) {
      return res.status(401).send("Token is invalid!");
    }

    const user = await userModel.findById(decodedToken.id);

    if (user.isAdmin) {
      verifyAdmin(res, next, user);
    } else {
      verifyUser(req, res, next, user?.userName);
    }
  });
};
