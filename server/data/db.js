const mongoose = require("mongoose");
const Country = require("../models/country");
const { countryData } = require("./countries");
const MongoDB_URL=process.env
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/jwt-auth", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Check if the "countries" collection is empty
    const count = await Country.countDocuments();
    if (count === 0) {
      // Seed the collection with countries from the file
      await Country.insertMany(countryData);
      console.log("Countries collection seeded");
    }
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

module.exports = connectDB;
