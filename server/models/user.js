const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcryptjs");
const validator = require("validator");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Static method for signup
userSchema.statics.signup = async function ({ name, email, password }) {
  if (!name) {
    throw new Error("name is a required parameter");
  }
  if (!email) {
    throw new Error("email is a required parameter");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Invalid email address");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not strong enough");
  }

  const existingUser = await this.findOne({ email });

  if (existingUser) {
    throw new Error("Email already exists. Please choose a different email.");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new this({
    name,
    email,
    password: hashedPassword,
  });

  await newUser.save();

  return newUser;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
