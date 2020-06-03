import React from "react";

const Card = ({ title, image }) => (
  <div>
    <img src={image} />
    <h2>{title}</h2>
  </div>
);

export default Card;
