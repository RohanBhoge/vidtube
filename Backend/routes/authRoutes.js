const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../controllers/authControllers.js");
const authMiddleware = require("../middleware/auth.js");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);

module.exports = { authRouter };
