import React from "react";

import "./collection-overview.style.scss";
import Card from "../card/card.component";

const CollectionOverview = ({ moviesCollection, history }) => {
  return (
    <div>
      {moviesCollection.map(({ id, poster_path, title }) => (
        <Card key={id} image={poster_path} title={title} />
      ))}
    </div>
  );
};

export default CollectionOverview;
