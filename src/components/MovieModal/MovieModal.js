import React from "react"
import "./MovieModal.css"

const MovieModal = ({ selectedMovie }) => {
  return (
    <div className="movie-modal">
      <div className="movie-trailer">
      </div>
      <section className="movie-details">
        <h1>{selectedMovie.title}</h1>
        <p>{selectedMovie.release_date}</p>
        <p>{selectedMovie.overview}</p>
        <p>{selectedMovie.genres}</p>
        <p>{selectedMovie.runtime}</p>
        <p>{selectedMovie.average_rating}</p>
        <img src={selectedMovie.poster_path} alt={selectedMovie.title}/>
      </section>
    </div>
  )
}



export default MovieModal
