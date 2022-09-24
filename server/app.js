const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.json({ greeting: "Assalamu Alaikum" });
});

const PORT = process.env.PORT;

// connect mongodb database
const connectDB = require("./config/database");
connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
