const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
exports.getAllUsers = async (req, res) => {
  res.status(200).json({ message: "all users" });
};
exports.userLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }
  const verifyPassword = await bcrypt.compare(password, user.password);
  if (!verifyPassword) {
    return res.status(401).json({ error: "password is incorrect" });
  }
  const token = await jwt.sign(
    { id: user._id, name: user.name },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
  res.status(200).json({ token: "Bearer " + token, name: user.name });
};
exports.userSignup = async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const user = await User.signup({ email, name, password });
    const token = await jwt.sign(
      { id: user._id, name: user.name },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ token: "Bearer " + token, name: user.name });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
