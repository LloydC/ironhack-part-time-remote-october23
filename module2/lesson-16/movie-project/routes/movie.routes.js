const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model");
const fileUploader = require('../config/cloudinary.config');
 
// GET route to display the form to create a new movie
router.get('/movies/create', (req, res) => res.render('movie-views/movie-create'));
 
router.get('/movies', (req, res) => {
    Movie.find()
      .then(moviesFromDB => {
        // console.log(moviesFromDB);
        res.render('movie-views/movies-list.hbs', { movies: moviesFromDB });
      })
      .catch(err => console.log(`Error while getting the movies from the DB: ${err}`));
  });

  router.post('/movies/create', fileUploader.single('movie-cover-image'), (req, res) => {
    const { title, description } = req.body;
    console.log('req.file', req.file)
   
    Movie.create({ title, description, imageUrl: req.file.path })
      .then(newlyCreatedMovieFromDB => {
        console.log(newlyCreatedMovieFromDB);
        res.redirect('/movies')
      })
      .catch(error => console.log(`Error while creating a new movie: ${error}`));
  });

module.exports = router;