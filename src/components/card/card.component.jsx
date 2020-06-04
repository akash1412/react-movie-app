import React from "react";
import "./card.style.scss";

const Card = ({ id, title, image }) => (
  <div className="card">
    <img src={image} className="card__img" />
    <h2 className="card_title">{title}</h2>
  </div>
);

export default Card;
