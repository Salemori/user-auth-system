const express = require("express");
const { handleSignUp, handleLogin} = require("../controllers/userController");
const {validateSignUp, validateLogin} = require("../middleware/validationMiddleware")

const userRouter = express.Router();

userRouter.post("/register", validateSignUp, handleSignUp);
userRouter.post("/login", validateLogin, handleLogin);

module.exports = userRouter;
