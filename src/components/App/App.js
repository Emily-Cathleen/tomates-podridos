import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AllMovies from "../AllMovies/AllMovies";
import SingleMovie from "../SingleMovie/SingleMovie";
import ErrorModal from "../ErrorModal/ErrorModal"
import { getData } from "../../apiCalls";
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      hasError: false
    };
  }

  componentDidMount() {
     getData("")
      .then((data) => this.setState({ movies: data.movies }))
      .catch((error) => this.throwError("Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"));
  };

  throwError = (error) => {
    this.setState({ error: error})
    this.setState({ hasError: true });
  }
  
  closeModalButton = () => {
    this.setState({ hasError: false });
  };

  clickedMovie = (id) => {
    console.log("thisis the id", id)
    this.setState({selectedMovieId: id});

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
            <Route path="/:id" render={({match}) => {
              return <SingleMovie id={match.params.id} actionName={this.throwError} /> 
              }}
            />
            {/* 404 Page */}
            

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
