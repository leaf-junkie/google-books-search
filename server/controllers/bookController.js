// const ObjectId = require("mongoose").Types.ObjectId;
const db = require("../models/book");
const mongoose = require("mongoose");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    console.log("hitting books controller")
      db
        .find({ })
        .then(books => {
          res.json({ books });
        })
        .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
      db
        .find({ })
        .then(books => {
          const book = books.filter(b => b._id.toString() === req.params.id);
          res.json({ book: book[0] });
        })
        .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db
      .create(req.body)
      .then(dbBook => {
        return db.User.findOneAndUpdate({ _id: req.user._id }, { $push: { books: dbBook._id } }, { new: true });
      })
      .then((dbUser) => {
        res.json(dbUser);
      })
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.user._id }, { $pull: { books: new ObjectId(req.params.id) } }, { new: true })
      .then(() => {
        db.Book
          .findOneAndDelete({ _id: req.params.id })
          .then(dbBook => res.json(dbBook))
          .catch(err => res.status(422).json(err));
      });
  }
};