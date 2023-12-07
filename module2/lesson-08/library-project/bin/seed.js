const mongoose = require('mongoose');
const Book = require('../models/Book.model');

const books = [ {
    title: 'Magic Mountain',
    author: 'Thomas Mann'   
},
{
    title: "men without women",
    author: "Murakami"
},
{
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin'
},
{
    title: 'The Alchemist',
    author: 'Paulo Coelo'
}]

mongoose.connect('mongodb://localhost:27017/library-project')
        .then(() => console.log('Connection to DB successful'))
        .then(()=> Book.create(books))
        .then((allBooks) => console.log(`${allBooks.length} books were added`))
        .then(()=> mongoose.connection.close())
        .catch(err => console.log(err))