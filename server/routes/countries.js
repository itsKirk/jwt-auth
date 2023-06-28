const express = require("express");
const { requireAuth } = require("../middlware/auth");
const { getAllCountries, getCountryById } = require("../controllers/countries");
const router = express.Router();

router.get("/", requireAuth, getAllCountries);
router.get("/:id", requireAuth, getCountryById);

module.exports = router;
