import React from "react";

import "./collection-overview.style.scss";

import Card from "../card/card.component";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collection-overview-container">
      {collection.map(({ id, poster_path, title, name, vote_average }) => (
        <Card
          key={id}
          id={id}
          image={poster_path}
          title={title || name}
          rating={vote_average}
        />
      ))}
    </div>
  );
};

export default CollectionOverview;
