import { asyncFetch } from "../../../API/fetch";

import { POPULAR_MOVIES } from "./popular.types";

const fetchPopularMoviesStart = () => ({
  type: POPULAR_MOVIES.FETCH_POPULAR_MOVIE_START,
});

const fetchPopularMoviesSuccess = (PopularMovies) => ({
  type: POPULAR_MOVIES.FETCH_POPULAR_MOVIE_SUCCESS,
  payload: PopularMovies,
});
const fetchPopularMoviesFailure = (errorMessage) => ({
  type: POPULAR_MOVIES.FETCH_POPULAR_MOVIE_FAILURE,
  payload: errorMessage,
});

export const fetchPopularMoviesStartAsync = (page) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPopularMoviesStart());

      const PopularMovies = await asyncFetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      PopularMovies.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        // movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      });

      dispatch(fetchPopularMoviesSuccess(PopularMovies));
    } catch (error) {
      dispatch(fetchPopularMoviesFailure(error.message));
    }
  };
};
