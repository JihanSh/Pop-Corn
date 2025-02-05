import React from "react";
import movies from "../data/movies.json";
import "./MovieList.css";
function MovieList() {
  return (
    <div className="MovieList">
      <h2>List Of Movies </h2>
      {movies.map((movie) => {
        return (
          <div key={movie.id} className="card">
            <p>Title: {movie.title}</p>
            <img src={movie.imgURL} />
            <p>Rating: {movie.rating}</p>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
