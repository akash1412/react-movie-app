import React from "react";

import { connect } from "react-redux";

import CollectionOverview from "../../../components/collection-overview/collection-overview.component";

const TopRatedMovies = ({ topRatedMovies }) => {
  return (
    <div>
      <CollectionOverview moviesCollection={topRatedMovies} />
    </div>
  );
};

const mapStateToProps = ({ topRatedMoviesReducer }) => ({
  topRatedMovies: topRatedMoviesReducer.topRatedMovies,
});

export default connect(mapStateToProps)(TopRatedMovies);
