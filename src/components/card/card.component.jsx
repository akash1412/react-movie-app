import React from "react";
import "./card.style.scss";

import { ReactComponent as Star } from "../../assets/star/star.svg";

const Card = ({ id, title, image, rating }) => {
  const textTrimFunc = (title) => {
    let newTitle;
    if (title.length > 16) {
      newTitle = title.substring(0, 16);
      return `${newTitle} ....`;
    }

    return title;
  };

  return (
    <div className="card">
      <img src={image} className="card__img" />
      <div className="card__details">
        <h2 className="card__title">{textTrimFunc(title)}</h2>
        <div className="card__ratings-container">
          <Star className="card__star-icon" />
          <span className="card__rating-value">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
