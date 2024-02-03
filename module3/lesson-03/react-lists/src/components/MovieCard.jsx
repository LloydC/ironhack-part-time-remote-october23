function MovieCard(props) {
    const { movie, deleteMovie } = props; // const movie = props.movie; const deleteMovie = props.deleteMovie;
   
    return (
      <div className="MovieCard">
        <h3>{movie.title}</h3>
        <p>Director: {movie.director}</p>
        <p>Rating: {movie.IMDBRating}</p>
        {/* Keep the button commented out for now */}
        <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
          Delete 
        </button>
      </div>
    );
  }
   
  export default MovieCard;