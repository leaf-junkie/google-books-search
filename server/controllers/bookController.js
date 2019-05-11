// const ObjectId = require("mongoose").Types.ObjectId;
const Book = require("../models/book");
const mongoose = require("mongoose");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("hitting books controller")
      Book
        .find({ })
        .then(dbBooks => {
          res.json(dbBooks);
        })
        .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
      Book
        .find({ })
        .then(books => {
          const book = books.filter(b => b.id.toString() === req.params.id);
          res.json({ book: book[0] });
        })
        .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Book
      .create(req.body)
      .then(dbBook => {
        res.json(dbBook);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    Book
      .findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    Book
    .findOneAndDelete({ id: req.params.id })
    .then(dbBook => res.json(dbBook))
    .catch(err => res.status(422).json(err))
  }
};