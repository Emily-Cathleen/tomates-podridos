import React, {Component} from "react"
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Movies from "../Movies/Movies"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      },
    ]
    }
  }

  render() {
    return(
      <main>
        <Header />
        <Movies />
        <Footer />
      </main>
    )
  } 
}

export default App