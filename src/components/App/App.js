import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllMovies from "../AllMovies/AllMovies";
import MovieModal from "../MovieModal/MovieModal";
import ErrorModal from "../ErrorModal/ErrorModal"
import { allMoviesData, singleMovieData } from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      isClicked: false,
      error: "",
      hasError: false
    };
  }

  componentDidMount = () => {
    return allMoviesData()
      .then((data) => this.setState({ movies: data.movies }))
      .catch((error) => this.throwError("Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"));
  };

  throwError = (error) => {
    this.setState({ error: error})
    this.setState({ hasError: true });

  }

  clickedMovie = (id) => {
    const findSelectedMovie = this.state.movies.find((movie) => {
      return movie.id === id;
    });
    singleMovieData(findSelectedMovie.id)
    .then((data) => {
      this.setState({ selectedMovie: data.movie });
      this.setState({ isClicked: true });
    })
    .catch((error) => this.throwError("Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"));
  };

  backButton = () => {
    this.setState({ isClicked: false });
  };

  closeModalButton = () => {
    this.setState({ hasError: false });
  };

  render() {
    return (
      <main>
        <Header />
        {!this.state.isClicked && (
          <AllMovies
            movies={this.state.movies}
            clickedMovie={this.clickedMovie}
          />
        )}
        {this.state.hasError && (
        <ErrorModal
          error={this.state.error}
          closeModalButton={this.closeModalButton}
        />)}
        {this.state.isClicked && (
          <MovieModal
            selectedMovie={this.state.selectedMovie}
            backButton={this.backButton}
          />
        )}
        <Footer />
      </main>
    );
  }
}

export default App;
