const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.handleSignUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(409).json({
        message: "User already exist",
      });
    }

    let saltRound = 10;
    let hashedPassword = await bcrypt.hash(password, saltRound);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({
      status: "success",
      message: "User registered successfully",
    });
  } catch (error) {
    res.json({
      status: "failed",
      message: error.message,
    });
  }
};


exports.handleLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(409).json({
                message: "User does not exist"
            });
        }

        const passwordEqual = await bcrypt.compare(password, user.password);
        if (!passwordEqual) {
            return res.status(401).json({
                message: "User login failed"
            });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET);
        res.status(200).json({
            status: "success",
            message: "User logged in successfully",
            token
        });

    } catch (error) {
        res.json({
            status: "failed",
            message: error.message
        });
    }
}

exports.handleGetUserProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};
