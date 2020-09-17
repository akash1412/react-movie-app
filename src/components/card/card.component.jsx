import React, { useState } from "react";

import LazyLoad from "react-lazyload";

import {
  CardContainer,
  CardImg,
  CardTitle,
  Details,
  ImageLoadWrapper,
} from "./card.style";

import BlankCanvas from "../../assets/image-error/blank_canvas.svg";
import { Loader } from "../spinner/spinner.component";

import { withRouter } from "react-router-dom";

const Card = ({ id, title, src, rating, match, history }) => {
  const [loaded, setLoaded] = useState(false);

  const textTrimFunc = (title) => {
    let newTitle;
    if (title.length > 20) {
      newTitle = title.substring(0, 20);
      return `${newTitle} ...`;
    }

    return title;
  };

  const handleCardClick = () => {
    history.push(`/movie/${id}`);
  };

  return (
    <CardContainer
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.4 }}
      onClick={() => handleCardClick()}
    >
      {/* <LazyLoad> */}
      {!loaded ? (
        <ImageLoadWrapper>
          <Loader />
        </ImageLoadWrapper>
      ) : null}

      <CardImg
        style={!loaded ? { display: "none" } : {}}
        src={`${process.env.REACT_APP_IMAGE_URL}${src}`}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          e.target.src = `${BlankCanvas}`;
        }}
      />

      {/* </LazyLoad> */}
      <Details>
        <CardTitle>{textTrimFunc(title)}</CardTitle>
        {/* <div className="card__ratings-container">
          
          <span className="card__rating-value">{rating}</span>
        </div> */}
      </Details>
    </CardContainer>
  );
};

export default withRouter(Card);
