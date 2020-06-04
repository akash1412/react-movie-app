import { asyncFetch } from "../../../API/fetch";

import { TOPRATED_MOVIES } from "./top-rated.types";

const fetchTopratedMoviesStart = () => ({
  type: TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_START,
});

const fetchTopratedMoviesSuccess = (topratedMovies) => ({
  type: TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_SUCCESS,
  payload: topratedMovies,
});

const fetchTopratedMoviesFailure = (error) => ({
  type: TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_FAILURE,
  payload: error,
});

export const fetchTopratedMoviesStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchTopratedMoviesStart());

      const movies = await asyncFetch(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1"
      );

      movies.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      });

      dispatch(fetchTopratedMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchTopratedMoviesFailure(error.message));
    }
  };
};
