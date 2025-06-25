const express = require("express");
const {
  handleSignUp,
  handleLogin,
  handleGetUserProfile,
} = require("../controllers/userController");
const {
  validateSignUp,
  validateLogin,
} = require("../middleware/validationMiddleware");
const { authToken } = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.post("/register", validateSignUp, handleSignUp);
userRouter.post("/login", validateLogin, handleLogin);
userRouter.get("/profile", authToken, handleGetUserProfile);

module.exports = userRouter;
