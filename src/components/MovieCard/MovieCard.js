import React from "react"
import "./MovieCard.css"

const MovieCard = ({id, image, title}) => {
  return(
    <div>
      <div className="movie-card" id={id}>
        <img src={image} alt={title}/>
      </div>
        <h3>{title}</h3>
    </div>

  )
}
export default MovieCard