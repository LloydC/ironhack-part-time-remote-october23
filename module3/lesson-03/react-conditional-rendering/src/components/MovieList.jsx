import { useState } from 'react';
import moviesData from '../movies-data.json';
 
import MovieCard from './MovieCard';
 
function MovieList() {
  const [movies, setMovies] = useState(moviesData);
  const [showMovies, setShowMovies] = useState(true);
 
  const deleteMovie = movieId => {
    const filteredMovies = movies.filter(movie => {
      return movie._id !== movieId;
    });
 
    setMovies(filteredMovies);
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };
 
  return (
    <div>
      <h2>Movie List</h2>

      <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>
      
      {showMovies &&
        movies.map(movie => {
          return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
        })}
    </div>
  );
}
 
export default MovieList;
