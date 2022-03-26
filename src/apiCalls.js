const allMoviesData = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => response.json())
}

const singleMovieData = (id) => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/{id}")
  .then(response => response.json())
}

export {allMoviesData, singleMovieData};
