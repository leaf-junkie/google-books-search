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

// API routes
// router.post("/api/books", () => {
//   db.create(req.body).then(() => {
//     console.log(res);
//     res.json(true);
//   }).catch((err) => {
//     res.json(err);
//   })
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksearch");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server is now on port ${PORT}!`);
});
