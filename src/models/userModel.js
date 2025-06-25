const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    match: [
      /^(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{8,}$/,
      "Password must be at least 8 characters long, contain at least one uppercase letter, and one special character.",
    ],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
