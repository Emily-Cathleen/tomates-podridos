import React, {Component} from "react"
import './App.css';
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Movies from "../Movies/Movies"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount() {
    this.setState()
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