import { useState } from "react";
import moviesDataJSON from "../movies-data.json";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovies";
 
 
function MovieList() {
  const [movies, setMovies] = useState(moviesDataJSON);
  const [moviesData, setMoviesData] = useState(moviesDataJSON); 

  const addNewMovie = (movie) => {
    const updatedMovies = [...movies, movie]; // Add the movie argument at the end of the list of movies
    const updatedMoviesData = [...moviesData, movie]; 

    setMovies(updatedMovies); // update the state variable "movies" with updatedMovies
    setMoviesData(updatedMoviesData); 
};

  // ADD
  const filterMovieList = (str) => {
    let filteredMovies;
    if (str === "All") { // resetting the list of movies to all the movies
      filteredMovies = moviesData;
    } else { // filter out the movies that don't match the selected option
      filteredMovies = moviesData.filter((movie) => {
        return movie.title[0].toLowerCase() === str.toLowerCase();
      });
    }
 
    setMovies(filteredMovies); // update the state variable 'movies'
  };
 
  return (
    <div>
      <h2>Movie List</h2>
      <FilterMovies filterMovies={filterMovieList}/>
      <AddMovie addMovie={addNewMovie}/>
      {movies.map(movie => {
        return <MovieCard key={movie._id} movie={movie} />;
      })}
    </div>
  );
}
 
export default MovieList;