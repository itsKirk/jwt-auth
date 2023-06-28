const mongoose = require("mongoose");
const Country = require("../models/country");
const { countryData } = require("./countries");
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    const count = await Country.countDocuments();
    if (count === 0) {
      await Country.insertMany(countryData);
      console.log("Countries collection seeded");
    }
  } catch (error) {
    process.exit(1);
  }
};

module.exports = connectDB;
