const mongoose = require("mongoose");
const { Schema } = mongoose;
const countrySchema = new Schema(
  {
    abbreviation: {
      type: "String",
    },
    capital: {
      type: "String",
    },
    currency: {
      type: "String",
    },
    name: {
      type: "String",
    },
    phone: {
      type: "String",
    },
    population: {
      type: "Number",
    },
    media: {
      flag: {
        type: "String",
      },
      emblem: {
        type: "String",
      },
      orthographic: {
        type: "String",
      },
    },
  },
  { timestamps: true }
);

const Country = mongoose.model("Country", countrySchema);

module.exports = Country;
