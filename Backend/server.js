const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/mongodb");
const cors = require("cors");
const { authRouter } = require("./routes/authRoutes.js");

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("API working!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});