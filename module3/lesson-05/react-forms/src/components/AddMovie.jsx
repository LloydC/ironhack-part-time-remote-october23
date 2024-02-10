import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
 
function AddMovie({ addMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);
 
  const handleTitleInput = e => setTitle(e.target.value);
 
  const handleDirectorInput = e => setDirector(e.target.value);
 
  const handleRatingInput = e => setIMDBRating(e.target.value);
 
  const handleOscarsInput = e => setHasOscars(e.target.checked);
  // e.target.checked is a boolean value from the `checkbox` input

  const handleSubmit = (e) => {
    
    e.preventDefault(); // prevents the form from reloading the page
    // Add the logic to create a new movie and add it to the state variable movies
    const _id = uuidv4(); // generate a unique identifier

    const newMovie = {
        _id, // add the unique identifier
        title, // title: title --> state variable 'title' on line 5
        director, // director: director
        IMDBRating,
        hasOscars
    }
    console.log('newMovie', newMovie)
    addMovie(newMovie) // updates the movies state variable
    // this resets the form to its initial state
    setTitle("")
    setDirector("")
    setIMDBRating(5)
    setHasOscars(true)
  }
 
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}> 
        <label>Title:</label>
        <input 
          type="text" 
          name="title" 
          value={title} 
          onChange={handleTitleInput} 
        />
 
        <label>Director:</label>
        <input 
          type="text" 
          name="director" 
          value={director} 
          onChange={handleDirectorInput} 
        />
 
        <label>IMDB Rating:</label>
        <input 
          type="number" 
          name="IMDBRating" 
          value={IMDBRating} 
          onChange={handleRatingInput} 
        />
 
        <label>Won Oscars:</label>
        <input 
          type="checkbox" 
          name="hasOscars" 
          checked={hasOscars} 
          onChange={handleOscarsInput} 
        />
 
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}
 
export default AddMovie;