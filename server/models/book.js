// models/book.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema ({
    title: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true, unique: true }
});

const Book = mongoose.model('Book', BookSchema);

module.exports = { Book };
