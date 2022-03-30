import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./AllMovies.css";
import { Link } from 'react-router-dom';

const AllMovies = ({ movies, clickedMovie }) => {
  const movieCards = movies.map((movie) => {
    return (
      <Link to={`/${movie.id}`} key={movie.id} style={{ textDecoration: 'none' }}>
      <MovieCard
        id={movie.id}
        image={movie.poster_path}
        title={movie.title}
        clickedMovie={clickedMovie}
      />
      </Link>
    );
  });
  return <div className="movies-section">{movieCards}</div>;
};
export default AllMovies;
