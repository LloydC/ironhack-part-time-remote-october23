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

// GET route to display the form
// we still didn't create any HBS files so this will be our next task
router.get('/books/create', (req, res) => res.render('books/book-create.hbs'));

router.post('/books/create', (req, res) => {
  //
  console.log('req.body', req.body)
  // const newBook = { title: req.body.title, description: req.body.description}
  // Book.create(newBook)
  Book.create(req.body)
      .then(()=> res.redirect('/books'))//redirect to the homepage/list of books
      .catch(err => console.log(err))
  
})

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

// GET route to display the form to update a specific book
router.get('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
 
  Book.findById(bookId)
    .then(bookToEdit => {
      console.log(bookToEdit);
      res.render('books/book-update', bookToEdit)
    })
    .catch(error => next(error));
});

router.post('/books/:bookId/edit', (req, res, next) => {
  const { bookId } = req.params;
  console.log(req.body)

  Book.findByIdAndUpdate(bookId, req.body, {new: true})
      .then(updatedBook => {
        console.log('updatedBook', updatedBook)
        res.redirect(`/books/${updatedBook._id}`)
      })
      .catch(err => console.log(err))
})
 
router.post('/books/:bookId/delete', (req, res, next) => {
  const { bookId } = req.params;

  Book.findByIdAndDelete(bookId)
      .then(() => res.redirect('/books'))
      .catch(err => console.log(err))
})
module.exports = router;