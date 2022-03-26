import React, {Component} from "react"
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import AllMovies from "../AllMovies/AllMovies"
import MovieModal from "../MovieModal/MovieModal"
import {allMoviesData, singleMovieData} from "../../apiCalls"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: "",
      isClicked: false,
      error: ''
    }
  }

  componentDidMount() {
    return allMoviesData().then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState("ERROR"))
  }

  clickedMovie = (id) => {
    console.log("CLICK")
    const findSelectedMovie = this.state.movies.find(movie => {
      return movie.id === id;
    })
    this.setState({selectedMovie: findSelectedMovie, isClicked: true})
  }


  render() {
    return(
      <main>
        <Header />
        {!this.state.isClicked && <AllMovies movies={this.state.movies} clickedMovie={this.clickedMovie} />}
        {this.state.isClicked && <MovieModal movie={this.state.selectedMovie} />}
        <Footer />
      </main>
    )
  }
}

export default App
