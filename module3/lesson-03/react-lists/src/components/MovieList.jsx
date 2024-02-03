import { useState } from 'react';
import MovieCard from './MovieCard';
 
// import the array of movie objects
import moviesData from '../movies-data.json';
 
function MovieList() {
  // Declare a state variable "movies"
  // and set the array from movies-data.json as the initial state
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId;
    });
 
    setMovies(filteredMovies);
  };
 
  return (
    <div>
      <h2>Movie List</h2>

      {movies.map(movieData => {
        return (
          <MovieCard key={movieData._id} movie={movieData} deleteMovie={deleteMovie}/>
        );
      })}
    </div>
  );
}
 
export default MovieList;