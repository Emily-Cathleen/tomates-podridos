const getData = (address) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${address}`)
  .then(response => response.json())
}

const singleMovieData = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(response => response.json())
}

export {getData, singleMovieData};
