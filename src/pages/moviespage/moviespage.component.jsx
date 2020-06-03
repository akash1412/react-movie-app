import React from "react";
import "./moviespage.style.scss";

import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const MoviesPage = ({ popularMovies }) => {
  return (
    <>
      <Switch>
        <Route
          path={`/movies/popular`}
          render={(props) => (
            <CollectionOverview moviesCollection={popularMovies} {...props} />
          )}
        />

        <Route path="/movies/upcoming" render={() => <CollectionOverview />} />
        <Route
          path="/movies/now-playing"
          render={() => <CollectionOverview />}
        />
        <Route path="/movies/top-rated" render={() => <CollectionOverview />} />
      </Switch>
    </>
  );
};

const mapStateToProps = ({ popularMoviesReducer }) => ({
  popularMovies: popularMoviesReducer.popularMovies,
});

export default connect(mapStateToProps)(MoviesPage);
