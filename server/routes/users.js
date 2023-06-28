const express = require("express");
const { getAllUsers, userLogin, userSignup } = require("../controllers/users");
const router = express.Router();

// GET /api/users/
router.get("/", getAllUsers);

// POST /api/users/
router.post("/", userSignup);

// POST /api/users/login
router.post("/login", userLogin);

module.exports = router;
