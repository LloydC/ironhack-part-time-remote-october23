const router = require("express").Router();
 const {movieListController,
  newCharacterController,
  createCharacterController,
  editCharacterController,
  submitEditCharacterController,
  deleteCharacterController} = require('../controllers/movies.controller')
// Require and instantiate the API Service
// const ApiService = require('../services/api.service');
// const apiService = new ApiService();
// List all the characters from the API.
router.get('/movie-characters/list', movieListController);
 
// Render a form to create a new character.
router.get('/movie-characters/create', newCharacterController);
 
// Submit info to create a new character.
router.post('/movie-characters/create', createCharacterController);
 
// Render a form to edit a character.
router.get('/movie-characters/edit/:id', editCharacterController);
 
// Submit info to edit a character with a matching id.
router.post('/movie-characters/edit/:id', submitEditCharacterController);
 
// Delete a character with a matching id.
router.get('/movie-characters/delete/:id', deleteCharacterController);
 
module.exports = router;