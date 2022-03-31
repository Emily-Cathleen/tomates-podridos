import React from "react"
import "./MovieCard.css"

const MovieCard = ({id, image, title, clickedMovie}) => {
  return(
    <div className="card" id={id} onClick={() => clickedMovie(id)}>
      <div className="card-image">
        <img src={image} alt={title}/>
      </div>
        <h3 className="card-title">{title}</h3>
    </div>

  )
}
export default MovieCard
