import React, { useEffect } from "react";
import "./movies-category-page.style.scss";

import { useDispatch, connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

//?ACTION
// import fetchMoviesStartAsync from "../../redux/movies/global-movie-dispatch.action";
// import { fetchDiscoverMovieStartAsync } from "../../redux/movies/discover/discover.action";
//?COMPONENTS
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

import TopRatedMovies from "./top-rated/movies.top-rated";
import PopularMovies from "./popular/movies.popular";
import UpcomingMovies from "./upcoming/movies.upcoming";
import NowPlayingMovies from "./now-playing/movies.now-playing";

const MoviesCatergoryPage = ({ match, discoverMovies }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchMoviesStartAsync(1));
  //   dispatch(fetchDiscoverMovieStartAsync(1));
  // }, []);

  return (
    <div className="movies-page">
      <Switch>
        {/* //! Define a route for /movie url {can add discover movie route} */}
        <Route
          exact
          path={match.url}
          render={() => (
            <CollectionOverview moviesCollection={discoverMovies} />
          )}
        />
        <Route path={`${match.url}/popular`} component={PopularMovies} />
        <Route path={`${match.url}/upcoming`} component={UpcomingMovies} />
        <Route path={`${match.url}/now-playing`} component={NowPlayingMovies} />
        <Route path={`${match.url}/top-rated`} component={TopRatedMovies} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ discoverMovieReducer }) => ({
  discoverMovies: discoverMovieReducer.discoverMovies,
});

export default connect(mapStateToProps)(MoviesCatergoryPage);
