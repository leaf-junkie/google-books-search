const router = require("express").Router();
const bookRoutes = require("./books");

rouoter.use("/books", bookRoutes);

module.exports = router;