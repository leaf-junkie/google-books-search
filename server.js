const express = require("express");
const path = require("path");
const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("./server/models/book");
const PORT = process.env.PORT || 3001;
const app = express();
const bookController = require("./server/controllers/bookController");

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch");

// Connect to server
app.listen(PORT, () => {
  console.log(`🌎 ==> API server is now on port ${PORT}!`);
});
