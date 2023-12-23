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

  const createCharacterController = (req, res) => {
    //   console.log('req.body', req.body);
    
      apiService
        .createCharacter(req.body)
        .then(() => res.redirect(`/movie-characters/list`))
        .catch(error => console.log(error));
    }

    const editCharacterController = (req, res) => {
        const { id } = req.params;
        apiService
        .getOneCharacter(id)
        .then(response => {
            res.render('pages/edit-character-form', {character: response.data})
        })
        .catch(error => console.log(error));
    }

    const submitEditCharacterController = (req, res) => {
        const { id } = req.params;
        const { name, occupation, weapon } = req.body;
      
        apiService
          .editCharacter(id, { name, occupation, weapon })
          .then(() => res.redirect(`/movie-characters/list`))
          .catch(error => console.log(error));
      }

    const deleteCharacterController =  (req, res) => {
        const { id } = req.params;
        
          apiService
            .deleteCharacter(id)
            .then(() => res.redirect(`/movie-characters/list`))
            .catch(error => console.log(error));
    }

    module.exports = {
        movieListController,
        newCharacterController,
        createCharacterController,
        editCharacterController,
        submitEditCharacterController,
        deleteCharacterController
    }