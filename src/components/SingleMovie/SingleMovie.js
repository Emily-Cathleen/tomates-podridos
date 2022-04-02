import React, {Component} from "react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
import TomateMeter from "../TomateMeter/TomateMeter"
import { getData, singleMovieData } from "../../apiCalls";


class SingleMovie extends Component {
  constructor({ id }) {
    super();
    this.state = {
      selectedMovie: {},
      video: {}
    }
  }

  componentDidMount = () => {
    Promise.all ([
    getData(id),
    getData(`${id}/videos`)
    ]).then((data) => {
    this.setState({selectedMovie: data[0].movie, video: data[1].videos})
  })

  .catch((error) => this.throwError("Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"));
  };


  return (
    <div
      className="single-movie"
      style={{ backgroundImage: `url(${selectedMovie.backdrop_path})` }}
    >
      <div className="movie-trailer">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${video[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </div>
      <section className="movie-details">
        <h1>{this.state.selectedMovie.title}</h1>
        <p>Released: {this.state.selectedMovie.release_date}</p>
        <p className="movie-description"> {this.state.selectedMovie.overview}</p>
        <p>{this.state.selectedMovie.genres}</p>
        <p>{this.state.selectedMovie.runtime} minutes</p>
        <p>{this.state.selectedMovie.average_rating}</p>
        <TomateMeter rating={this.state.selectedMovie.average_rating}  />
        <div className="button-box">
          <Link to="/">
            <button>BACK</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SingleMovie;
