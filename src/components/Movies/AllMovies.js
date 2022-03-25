import React from "react"
import MovieCard from "../MovieCard/MovieCard"
import "./AllMovies.css"

const AllMovies = ({movies}) => {  //props
  // console.log(movies)
  const movieCards = movies.map(movie => {
    return(
      <MovieCard
        id={movie.id}
        key={movie.id}
        image={movie.poster_path}
        title={movie.title}
      />
    )
  })
  return(
    <div className="movies-section">
      {movieCards}
    </div>

  )
}
export default AllMovies