import React from "react";
import "./collection-overview.style.scss";

import Card from "../card/card.component";

const CollectionOverview = ({ moviesCollection, history }) => {
  return (
    <div className="collection-overview-container">
      {moviesCollection.map(({ id, poster_path, title }) => (
        <Card key={id} id={id} image={poster_path} title={title} />
      ))}
    </div>
  );
};

export default CollectionOverview;
