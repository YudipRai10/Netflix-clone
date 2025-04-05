const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/UserRoute.js");

const app = express();

app.use(cors());
app.use(express.json());
require("dotenv").config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

app.use("/api/user", userRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Server started");
});
