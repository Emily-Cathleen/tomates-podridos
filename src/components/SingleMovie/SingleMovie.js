import React, { Component } from "react";
import "./SingleMovie.css";
import { Link } from "react-router-dom";
import TomateMeter from "../TomateMeter/TomateMeter";
import { getData } from "../../apiCalls";

class SingleMovie extends Component {
  constructor({ id }) {
    super();
    this.state = {
      id: id,
      selectedMovie: {},
      video: {},
    };
  }

  componentDidMount() {
    getData(this.state.id)
      .then((data) => {
        console.log("this is the data", data);
        this.setState({ selectedMovie: data.movie });
      })
      .catch((error) =>
        this.throwError(
          "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
        )
      );
    getData(`${this.state.id}/videos`)
      .then((data) => {
        console.log("this is the video data", data);
        this.setState({ video: data.videos[0] });
      })
      .catch((error) =>
        this.throwError(
          "Oops! something went wrong. Please try again. If problem persists, send complaints to Robbie and Scott"
        )
      );
  }

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
            {" "}
            {this.state.selectedMovie.overview}
          </p>
          <p>{this.state.selectedMovie.genres}</p>
          <p>{this.state.selectedMovie.runtime} minutes</p>
          <p>{this.state.selectedMovie.average_rating}</p>
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
