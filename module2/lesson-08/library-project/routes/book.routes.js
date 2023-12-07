// Define all the routes related to the Book model
const router = require('express').Router();
 
const Book = require('../models/Book.model.js'); // <== add this line before your routes
 
// GET route to retrieve and display all the books
router.get('/books', (req, res, next) => {
  Book.find()
    .then(allTheBooksFromDB => {
      // -> allTheBooksFromDB is a placeholder, it can be any word
      console.log('Retrieved books from DB:', allTheBooksFromDB);
 
      res.render('books/books-list.hbs', { books: allTheBooksFromDB });
    })
    .catch(error => {
      console.log('Error while getting the books from the DB: ', error);
 
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

// GET route to retrieve and display details of a specific book
router.get('/books/:bookId', (req, res) => {
  const bookId = req.params.bookId;
  
  Book.findOne({_id: bookId})
      .then(foundBook => {
        console.log('foundBook', foundBook);
        res.render('books/book-details.hbs', foundBook)
      })
      .catch(err => console.log(err))
 
});
 
module.exports = router;