import React, { useState, useEffect } from "react";

import { connect, useDispatch } from "react-redux";

// import { fetchPopularMoviesStartAsync } from "../../../redux/movies/popular/popular.action";

import CollectionOverview from "../../../components/collection-overview/collection-overview.component";

const PopularMovies = ({ popularMovies }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchPopularMoviesStartAsync(page));
  // }, [dispatch]);

  const [page, setPage] = useState(1);

  const handlePaginationClick = (event) => {
    console.log("clicked");
    setPage(event.target.value);
    // dispatch(fetchPopularMoviesStartAsync(page));
  };

  return (
    <div>
      <CollectionOverview
        moviesCollection={popularMovies}
        handlePaginationClick={handlePaginationClick}
        page={page}
      />
    </div>
  );
};

const mapStateToProps = ({ popularMoviesReducer }) => ({
  popularMovies: popularMoviesReducer.popularMovies,
});

export default connect(mapStateToProps)(PopularMovies);
