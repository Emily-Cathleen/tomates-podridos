const getData = (address) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${address}`)
  .then(response => response.json());
};

export {getData};
