import React, {Component} from "react"
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import AllMovies from "../AllMovies/AllMovies"
import movieData from "../../movie-data";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState({ movies: movieData.movies })
  }

  render() {
    return(
      <main>
        <Header />
        <AllMovies movies={this.state.movies} />
        <Footer />
      </main>
    )
  } 
}

export default App