const express = require('express');
const router = express.Router();

const Book = require("../models/Book.model");

/* GET home page */
router.get("/books", (req, res, next) => {
    Book.find()
        .then(allBooks => {
            res.render("books/list", { books: allBooks });
        })
        .catch(err => console.log(err))
  
});

module.exports = router;
