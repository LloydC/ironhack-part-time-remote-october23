const router = require("express").Router();
 
// Require and instantiate the API Service
const ApiService = require('../services/api.service');
const apiService = new ApiService();
// List all the characters from the API.
router.get('/movie-characters/list', (req, res) => {
    apiService
    .getAllCharacters()
    .then((response) => {
   
      res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
    })
    .catch(error => console.log(error));
});
 
// Render a form to create a new character.
router.get('/movie-characters/create', (req, res) => {
  res.render('pages/new-character-form')
});
 
// Submit info to create a new character.
router.post('/movie-characters/create', (req, res) => {
//   console.log('req.body', req.body);

  apiService
    .createCharacter(req.body)
    .then(() => res.redirect(`/movie-characters/list`))
    .catch(error => console.log(error));
});
 
// Render a form to edit a character.
router.get('/movie-characters/edit/:id', (req, res) => {
    const { id } = req.params;
    apiService
    .getOneCharacter(id)
    .then(response => {
        res.render('pages/edit-character-form', {character: response.data})
    })
    .catch(error => console.log(error));
});
 
// Submit info to edit a character with a matching id.
router.post('/movie-characters/edit/:id', (req, res) => {
  const { id } = req.params;
  const { name, occupation, weapon } = req.body;

  apiService
    .editCharacter(id, { name, occupation, weapon })
    .then(() => res.redirect(`/movie-characters/list`))
    .catch(error => console.log(error));
});
 
// Delete a character with a matching id.
router.get('/movie-characters/delete/:id', (req, res) => {
const { id } = req.params;

  apiService
    .deleteCharacter(id)
    .then(() => res.redirect(`/movie-characters/list`))
    .catch(error => console.log(error));
});
 
module.exports = router;