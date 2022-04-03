import React, { Component } from "react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
import TomateMeter from "../TomateMeter/TomateMeter";
import { getData } from "../../apiCalls";

class SingleMovie extends Component {
  constructor({ id, actionName }) {
    super();
    this.state = {
      id: id,
      selectedMovie: {},
      video: {},
      error: "",
      hasError: false,
    };
  }

  componentDidMount() {
    getData(this.state.id)
      .then((data) => this.cleanMovieData(data))
      .then((data) => this.setState({ selectedMovie: data.movie }))
      .catch((error) =>
        this.throwError(
          "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
        )
      );
    getData(`${this.state.id}/videos`)
      .then((data) => {
        this.setState({ video: data.videos[0] });
      })
      .catch((error) =>
        this.throwError(
          "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
        )
      );
  }

  cleanMovieData(data) {
    console.log("clean movie got the data", data);
    data.movie.backdrop_path = !data.movie.backdrop_path
      ? null
      : data.movie.backdrop_path;
    data.movie.overview =
      data.movie.overview === ""
        ? "No overview available."
        : data.movie.overview;
    data.movie.genres =
      data.movie.genres === "" ? "None Listed" : data.movie.genres.join(", ");
    data.movie.average_rating = Number(data.movie.average_rating.toFixed(2));
    data.movie.runtime = data.movie.runtime === 0 ? "N/A" : data.movie.runtime;
    return data
  }

  throwError = (error) => {
    this.setState({ error: error });
    this.setState({ hasError: true });
  };

  closeModalButton = () => {
    this.setState({ hasError: false });
  };

  render() {
    return (
      <div
        className="single-movie"
        style={{
          backgroundImage: `url(${this.state.selectedMovie.backdrop_path})`,
        }}
      >
        <div className="movie-trailer">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${this.state.video.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen="allowfullscreen"
          ></iframe>
        </div>
        <section className="movie-details">
          <h1>{this.state.selectedMovie.title}</h1>
          <p>Released: {this.state.selectedMovie.release_date}</p>
          <p className="movie-description">
            {this.state.selectedMovie.overview}
          </p>
          <p>{this.state.selectedMovie.genres}</p>
          <p>{this.state.selectedMovie.runtime} minutes</p>
          <TomateMeter rating={this.state.selectedMovie.average_rating} />
          <div className="button-box">
            <Link to="/">
              <button>BACK</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default SingleMovie;
