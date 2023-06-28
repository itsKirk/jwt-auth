const Country = require("../models/country");
exports.getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find({});
    res.json(countries);
  } catch (error) {
    console.error("Failed to fetch countries", error);
    res.status(500).json({ error: "Failed to fetch countries" });
  }
};
exports.getCountryById = async (req, res) => {
  try {
    const countryId = req.params.id;
    const country = await Country.findById(countryId);

    if (!country) {
      return res.status(404).json({ error: "Country not found" });
    }

    res.json(country);
  } catch (error) {
    console.error("Failed to fetch country", error);
    res.status(500).json({ error: "Failed to fetch country" });
  }
};
