import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllMovies from "../AllMovies/AllMovies";
import SingleMovie from "../SingleMovie/SingleMovie";
import ErrorModal from "../ErrorModal/ErrorModal"
import { getData, singleMovieData } from "../../apiCalls";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      videos: {},
      error: "",
      hasError: false
    };
  }

  componentDidMount = () => {
    return getData("")
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
    Promise.all([
      getData(findSelectedMovie.id),
      getData(`${findSelectedMovie.id}/videos`)
    ]).then((data) => {
      this.setState({selectedMovie: data[0].movie, video: data[1].videos})
    })

    // singleMovieData(findSelectedMovie.id)
    // .then((data) => {
    //
    //   this.setState({ selectedMovie: data.movie });
    // })
    .catch((error) => this.throwError("Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"));
  };

  // backButton = () => {
  //   this.setState({ isClicked: false });
  // };

  closeModalButton = () => {
    this.setState({ hasError: false });
  };

  render() {
    return (
      <main>
        <Header />
          <Switch>
          {/* HomePage */}
            <Route exact path="/" render={() =>
            <AllMovies movies={this.state.movies} clickedMovie={this.clickedMovie}/> }
            />
          {/* SingleMoviePage */}
            <Route path="/:id" render={() =>
              <SingleMovie selectedMovie={this.state.selectedMovie} backButton={this.backButton}/> }
            />

          </Switch>
        {this.state.hasError && (
        <ErrorModal
          error={this.state.error}
          closeModalButton={this.closeModalButton}
        />)}

        <Footer />
      </main>
    );
  }
}

export default App;
