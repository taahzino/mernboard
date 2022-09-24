const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const MONGO_URI =
      process.env.NODE_ENV.trim().toString() === "development"
        ? process.env.MONGO_URI_LOCAL
        : process.env.MONGO_URI_REMOTE;

    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Database Connection Host: ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
