import React from "react"
import "./MovieModal.css"

const MovieModal = (id, image, backdrop, title, descrription, rating, budget, runTime, tagLine, releaseDate) => {
  return (
    <div className="movie-modal">
      <div className="movie-trailer">
      </div>
      <section className="movie-details">
        <h1>Title</h1>
        <p>Description</p>
        <p>Rating</p>
        <p>Release Date</p>
        <p>Run Time</p>
        <p>Budget</p>
        <img src={image} alt={title}/>
      </section>
    </div>
  )
}



export default MovieModal
