import React from "react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
import TomateMeter from "../TomateMeter/TomateMeter"


const SingleMovie = ({ selectedMovie, backButton }) => {
  return (
    <div
      className="single-movie"
      style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}
    >
      {/* <img className="movie-bg" src={selectedMovie.backdrop_path} alt={selectedMovie.title}/> */}
      <div className="movie-trailer">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/aETz_dRDEys"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>
      <section className="movie-details">
        <h1>{selectedMovie.title}</h1>
        <p>Released: {selectedMovie.release_date}</p>
        <p className="movie-description"> {selectedMovie.overview}</p>
        <p>{selectedMovie.genres}</p>
        <p>{selectedMovie.runtime} minutes</p>
        <p>{selectedMovie.average_rating}</p>
        <TomateMeter rating={selectedMovie.average_rating}  />
        <div className="button-box">
          <Link to="/">
            <button>BACK</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SingleMovie;
