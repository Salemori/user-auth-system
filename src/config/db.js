const mongoose = require("mongoose");

const connectDb = async () => {
  console.log("Connecting to Database...");
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database Connected!");
};

module.exports = connectDb;
