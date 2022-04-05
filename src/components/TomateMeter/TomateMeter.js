import React from "react"
import "./TomateMeter.css"
import rot from "../../images/tomate-rot.png"
import meh from "../../images/tomate-meh.png"
import nice from "../../images/tomate-nice.png"
import cool from "../../images/tomate-cool.png"
import wow from "../../images/tomate-wow.png"

const TomateMeter = ({rating}) => {
  const tomate = (rating) => {
    if (rating <= 3) {
      return [rot, "rot"]
    }
    if (rating <= 4) {
      return [meh, "meh"]
    }
    if (rating <= 5) {
      return [nice, "nice"]
    }
    if (rating < 7) {
      return [cool, "cool"]
    }
    else {
      return [wow, "wow"]
    }
  }  


  return (
    <div>
    {rating && (
        <div className="tomate-meter">
          <p className="rating-value">{`Rating: ${rating}`}</p>
          <img
            className="rating-img"
            src={tomate(rating)[0]}
            alt={`cartoon tomato ${tomate(rating)[1]}`}
          />
        </div>
    )}
    </div>
);
}

export default TomateMeter
