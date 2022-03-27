import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./AllMovies.css";

const AllMovies = ({ movies, clickedMovie }) => {
  const movieCards = movies.map((movie) => {
    return (
      <MovieCard
        id={movie.id}
        key={movie.id}
        image={movie.poster_path}
        title={movie.title}
        clickedMovie={clickedMovie}
      />
    );
  });
  return <div className="movies-section">{movieCards}</div>;
};
export default AllMovies;
