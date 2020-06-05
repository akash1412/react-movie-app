import React from "react";

import { connect } from "react-redux";

import CollectionOverview from "../../../components/collection-overview/collection-overview.component";

const UpcomingMovies = ({ upcomingMovies }) => {
  return (
    <div>
      <CollectionOverview moviesCollection={upcomingMovies} />
    </div>
  );
};

const mapStateToProps = ({ upcomingMoviesReducer }) => ({
  upcomingMovies: upcomingMoviesReducer.upcomingMovies,
});

export default connect(mapStateToProps)(UpcomingMovies);
