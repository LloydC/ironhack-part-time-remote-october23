const ApiService = require('../services/api.service');
const apiService = new ApiService();

const movieListController = (req, res) => {
    apiService
    .getAllCharacters()
    .then((response) => {
   
      res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
    })
    .catch(error => console.log(error));
}

const newCharacterController = (req, res) => {
    res.render('pages/new-character-form')
  };