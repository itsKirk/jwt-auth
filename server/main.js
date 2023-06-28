// Importing required modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./data/db");
const passport = require("passport");
require("./passport");

// Load environment variables from a .env file
dotenv.config();

// Creating an Express application
const app = express();

// Initialize Passport
app.use(passport.initialize());
// Enable CORS middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Parse JSON request bodies
app.use(express.json());

// Define a route handler for the root URL
app.get("/", (req, res) => {
  res.send("Welcome to Countries App Data Hub");
});

//Connect to the database

connectDB()
  .then(() => {
    // Start the server
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
//Configure routes

app.use("/api/users", require("./routes/users"));
app.use("/api/countries", require("./routes/countries"));
