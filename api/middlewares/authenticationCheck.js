import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const verifyUser = (req, res, next, userName) => {
  console.log("🚀 ~ userName:", userName);
  console.log("🚀 ~ req:", req.body);
  if (req.body.userName || req.params.userName === userName) {
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
  const token =
    req.headers.cookie?.split("session_token=")[1] ||
    req.body.session_token?.split("session_token=")[1];

  if (!token) {
    return res.status(401).send("Not authorized!");
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
    console.log("🚀 ~ token:", token);
    if (err) {
      return res.status(401).send("Token is invalid!");
    }

    const user = await userModel.findById(decodedToken.id);

    const ADMIN_ROUTES = ["/get-all", "/delete-all"].includes(req.route.path);

    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: 3600000, // 1 hour in milliseconds
    });

    if (user.isAdmin || ADMIN_ROUTES) {
      verifyAdmin(res, next, user);
    } else {
      verifyUser(req, res, next, user?.userName);
    }
  });
};
