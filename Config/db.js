const mongoose = require("mongoose");
const colors = require("colors")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("database connection successfully".bgGreen);
  } catch (error) {
    console.log("database connection failed".bgRed);
  }
};

module.exports = { connectDB };
