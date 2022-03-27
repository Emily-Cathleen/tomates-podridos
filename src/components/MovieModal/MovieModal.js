import React from "react"
import "./MovieModal.css"

const MovieModal = ({ selectedMovie }) => {
  return (
    <div className="movie-modal">
      <div className="movie-trailer">
      </div>
      <section className="movie-details">
        <h1>{selectedMovie.title}</h1>
        <img src={selectedMovie.image} alt={selectedMovie.title}/>
      </section>
    </div>
  )
}



export default MovieModal
