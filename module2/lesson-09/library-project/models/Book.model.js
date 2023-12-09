// Define our Book model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    author: {
        type: String,
        required: true
    }
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book;