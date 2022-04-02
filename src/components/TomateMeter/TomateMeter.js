import React from "react"
import "./TomateMeter.css"
import rot from "../../images/tomate-rot.png"
import meh from "../../images/tomate-meh.png"
import nice from "../../images/tomate-nice.png"
import cool from "../../images/tomate-cool.png"
import wow from "../../images/tomate-wow.png"

const TomateMeter = ({rating}) => {
  const roundRating = (rating) => {
    return rating.toFixed(2);
  }
console.log(typeof roundRating(rating))
  const tomate = (rating) => {
    if (rating <= 3) {
      return rot
    }
    if (rating <= 4) {
      return meh
    }
    if (rating <= 5) {
      return nice
    }
    if (rating <= 6) {
      return cool
    }
    if (rating >= 7) {
      return wow
    }
  };


  return (
    <div>
    {rating && (
        <div className="tomate-meter">
          <h3>{`Rating: ${roundRating(rating)}`}</h3>
          <img
            className="rating-img"
            src={tomate(rating)}
            alt="cartoon tomato"
          />
        </div>
    )}
    </div>
);
}

export default TomateMeter
