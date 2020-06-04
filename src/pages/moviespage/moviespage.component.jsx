import React from "react";
import "./moviespage.style.scss";

import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const MoviesPage = ({ popularMovies, upcomingMovies, topRatedMovies }) => {
  return (
    <div className="movies-page">
      <Switch>
        <Route
          path={`/movies/popular`}
          render={(props) => (
            <CollectionOverview moviesCollection={popularMovies} {...props} />
          )}
        />

        <Route
          path="/movies/upcoming"
          render={() => (
            <CollectionOverview moviesCollection={upcomingMovies} />
          )}
        />
        <Route
          path="/movies/now-playing"
          render={() => <CollectionOverview />}
        />
        <Route
          path="/movies/top-rated"
          render={() => (
            <CollectionOverview moviesCollection={topRatedMovies} />
          )}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({
  popularMoviesReducer,
  upcomingMoviesReducer,
  topRatedMovies,
}) => ({
  popularMovies: popularMoviesReducer.popularMovies,
  upcomingMovies: upcomingMoviesReducer.upcomingMovies,
  topRatedMovies: topRatedMovies.topRatedMovies,
});

export default connect(mapStateToProps)(MoviesPage);
