import { asyncFetch } from "../../../API/fetch";

import { DISCOVER_MOVIES } from "./discover.type";

const fetchDiscoverMovieStart = () => ({
  type: DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_START,
});

const fetchDiscoverMovieSuccess = (movies) => ({
  type: DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_SUCCESS,
  payload: movies,
});

const fetchDiscoverMovieFailure = (error) => ({
  type: DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_FAILURE,
  payload: error,
});

export const fetchDiscoverMovieStartAsync = (page) => async (dispatch) => {
  try {
    dispatch(fetchDiscoverMovieStart());

    const DiscoverMovies = await asyncFetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=${page}`
    );

    DiscoverMovies.forEach((movie) => {
      movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      // movie.backdrop_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    });

    dispatch(fetchDiscoverMovieSuccess(DiscoverMovies));
  } catch (error) {
    dispatch(fetchDiscoverMovieFailure(error));
  }
};
