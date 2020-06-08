import { asyncFetch } from "../../../API/fetch";

import {
  UPCOMING_MOVIES,
  TOPRATED_MOVIES,
  TRENDING_MOVIES,
  POPULAR_MOVIES,
  DISCOVER_MOVIES,
  NOW_PLAYING_MOVIES,
} from "./movie.types";

////////////////////////////////////////////////
//*Upcoming movies action

const fetchUpcomingMoviesStart = () => ({
  type: UPCOMING_MOVIES.FETCH_UPCOMING_START,
});

const fetchUpcomingMoviesSuccess = (data) => ({
  type: UPCOMING_MOVIES.FETCH_UPCOMING_SUCCESS,
  payload: data,
});

const fetchUpcomingMoviesFailure = (error) => ({
  type: UPCOMING_MOVIES.FETCH_UPCOMING_FAILURE,
  payload: error,
});

export const fetchUpcomingMoviesStartAsync = (page) => {
  return async (dispatch) => {
    try {
      dispatch(fetchUpcomingMoviesStart());

      const movies = await asyncFetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      dispatch(fetchUpcomingMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchUpcomingMoviesFailure(error.message));
    }
  };
};

////////////////////////////////////////////////////
//*Trending movies action

const fetchTrendingMovieStart = () => ({
  type: TRENDING_MOVIES.FETCH_TRENDING_MOVIE_START,
});

const fetchTrendingMovieSuccess = (data) => ({
  type: TRENDING_MOVIES.FETCH_TRENDING_MOVIE_SUCCESS,
  payload: data,
});

const fetchTrendingMovieFailure = (error) => ({
  type: TRENDING_MOVIES.FETCH_TRENDING_MOVIE_FAILURE,
  payload: error,
});

export const fetchTrendingMovieStartAsync = () => async (dispatch) => {
  try {
    dispatch(fetchTrendingMovieStart());

    const movies = await asyncFetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>"
    );

    dispatch(fetchTrendingMovieSuccess(movies));
  } catch (error) {
    dispatch(fetchTrendingMovieFailure(error.message));
  }
};

/////////////////////////////////////////////////
//*top rated movie action

const fetchTopratedMoviesStart = () => ({
  type: TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_START,
});

const fetchTopratedMoviesSuccess = (data) => ({
  type: TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_SUCCESS,
  payload: data,
});

const fetchTopratedMoviesFailure = (error) => ({
  type: TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_FAILURE,
  payload: error,
});

export const fetchTopratedMoviesStartAsync = (page) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTopratedMoviesStart());

      const movies = await asyncFetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      dispatch(fetchTopratedMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchTopratedMoviesFailure(error.message));
    }
  };
};

/////////////////////////////////////////////////////////
//*Popular movies action

const fetchPopularMoviesStart = () => ({
  type: POPULAR_MOVIES.FETCH_POPULAR_MOVIE_START,
});

const fetchPopularMoviesSuccess = (data) => ({
  type: POPULAR_MOVIES.FETCH_POPULAR_MOVIE_SUCCESS,
  payload: data,
});
const fetchPopularMoviesFailure = (errorMessage) => ({
  type: POPULAR_MOVIES.FETCH_POPULAR_MOVIE_FAILURE,
  payload: errorMessage,
});

export const fetchPopularMoviesStartAsync = (page) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPopularMoviesStart());

      const movies = await asyncFetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      dispatch(fetchPopularMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchPopularMoviesFailure(error.message));
    }
  };
};

////////////////////////////////////////
//* now playing movies action

const fetchNowPlayingMoviesStart = () => ({
  type: NOW_PLAYING_MOVIES.FETCH_NOW_PLAYING_MOVIE_START,
});

const fetchNowPlayingMoviesSuccess = (data) => ({
  type: NOW_PLAYING_MOVIES.FETCH_NOW_PLAYING_MOVIE_SUCCESS,
  payload: data,
});

const fetchNowPlayingMoviesFailure = (error) => ({
  type: NOW_PLAYING_MOVIES.FETCH_NOW_PLAYING_MOVIE_FAILURE,
  payload: error,
});

export const fetchNowPlayingMoviesStartAsync = (page) => async (dispatch) => {
  try {
    dispatch(fetchNowPlayingMoviesStart());

    const movies = await asyncFetch(`
            https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=${page}`);

    dispatch(fetchNowPlayingMoviesSuccess(movies));
  } catch (error) {
    dispatch(fetchNowPlayingMoviesFailure(error.message));
  }
};

/////////////////////////////////////////////////////////
//* Discover movies action

const fetchDiscoverMovieStart = () => ({
  type: DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_START,
});

const fetchDiscoverMovieSuccess = (data) => ({
  type: DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_SUCCESS,
  payload: data,
});

const fetchDiscoverMovieFailure = (error) => ({
  type: DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_FAILURE,
  payload: error,
});

export const fetchDiscoverMovieStartAsync = (page) => async (dispatch) => {
  try {
    dispatch(fetchDiscoverMovieStart());

    const movies = await asyncFetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );

    dispatch(fetchDiscoverMovieSuccess(movies));
  } catch (error) {
    dispatch(fetchDiscoverMovieFailure(error));
  }
};
