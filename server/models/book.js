const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    // title as returned from Google Books API
    title: {
        type: String,
        required: true
    },

    // array of strings: author(s) as returned from Google Books API
    authors: {
        type: String,
        required: true
    },

    // description as returned from Google Books API
    description: {
        type: String,
    },

    // thumbnail image as returned from Google Books API
    image: {
        type: String,
    },

    // information link as returned from Google Books API
    link: {
        type: String,
        required: true
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;