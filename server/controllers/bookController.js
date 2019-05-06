const db = require("../models/book");

module.exports = {
    // Display all Saved books
    findAll: function(req, res) {
        db.find({})
        .then(bookModel => res.json(bookModel))
        .catch(err => res.status(422).json(err));
    },

    // Add a new book to Saved?
    create: function(req, res) {

    },

    // Remove a book from Saved based on ID
    remove: function(req, res) {

    }
}