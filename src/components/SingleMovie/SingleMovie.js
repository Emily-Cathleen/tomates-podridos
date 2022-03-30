import React from "react"
import "./SingleMovie.css"
import { Link } from 'react-router-dom';

const SingleMovie = ({ selectedMovie, backButton }) => {
  return (
    <div className="movie-modal">
      <div className="movie-trailer">
      </div>
      <section className="movie-details">
      <img className="modal-img" src={selectedMovie.backdrop_path} alt={selectedMovie.title}/>
        <h1>{selectedMovie.title}</h1>
        <p>Released: {selectedMovie.release_date}</p>
        <p className="movie-description"> {selectedMovie.overview}</p>
        <p>{selectedMovie.genres}</p>
        <p>{selectedMovie.runtime} minutes</p>
        <p>{selectedMovie.average_rating}</p>
        </section>
        <div>
        <Link to="/">
          <button onClick={() => backButton()}>BACK</button>
        </Link>
        </div>
    </div>
  )
}



export default SingleMovie
