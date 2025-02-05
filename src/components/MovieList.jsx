import React, { useState } from "react";
import movies from "../data/movies.json";
import "./MovieList.css";

function MovieList() {
  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);
  const deleteMovie = (movieId) => {
    console.log("deleting movie with the id...", movieId);
    const newListOfMovies = moviesToDisplay.filter((movie) => {
      if (movie.id !== movieId) {
        return true;
      } else return false;
    });
    setMoviesToDisplay(newListOfMovies);
  };

  return (
    <div className="MovieList">
      <h2>List Of Movies {moviesToDisplay.length} </h2>
      {moviesToDisplay.map((movie) => {
        return (
          <div key={movie.id} className="card">
            <p>Title: {movie.title}</p>
            <img src={movie.imgURL} alt={movie.title} />
            <p>Rating: {movie.rating}</p>
            <button
              onClick={() => {
                deleteMovie(movie.id);
              }}
            >
              Delete this movie
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
