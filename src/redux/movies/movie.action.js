import { asyncFetch } from '../../API/fetch';

import * as movie from './movie.types';

////////////////////////////////////////////////

const fetchMovieStart = () => ({
  type: movie.MOVIE.FETCH_MOVIE_START,
});

const fetchMovieSuccess = (data) => ({
  type: movie.MOVIE.FETCH_MOVIE_SUCCESS,
  payload: data,
});

const fetchMovieFailure = (error) => ({
  type: movie.MOVIE.FETCH_MOVIE_FAILURE,
  payload: error,
});

//*Upcoming movies action

const fetchUpcomingMoviesStart = () => ({
  type: movie.UPCOMING.FETCH_UPCOMING_START,
});

const fetchUpcomingMoviesSuccess = (data) => ({
  type: movie.UPCOMING.FETCH_UPCOMING_SUCCESS,
  payload: data,
});

const fetchUpcomingMoviesFailure = (error) => ({
  type: movie.UPCOMING.FETCH_UPCOMING_FAILURE,
  payload: error,
});

export const fetchUpcomingMoviesStartAsync = (page = 1) => {
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

const fetchTrendingStart = () => ({
  type: movie.TRENDING.FETCH_TRENDING_START,
});

const fetchTrendingSuccess = (data) => ({
  type: movie.TRENDING.FETCH_TRENDING_SUCCESS,
  payload: data,
});

const fetchTrendingFailure = (error) => ({
  type: movie.TRENDING.FETCH_TRENDING_FAILURE,
  payload: error,
});

export const fetchTrendingStartAsync = () => async (dispatch) => {
  try {
    dispatch(fetchTrendingStart());

    const fetch = await asyncFetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=<<api_key>>`
    );

    dispatch(fetchTrendingSuccess(fetch));
  } catch (error) {
    dispatch(fetchTrendingFailure(error.message));
  }
};

/////////////////////////////////////////////////
//*top rated movie action
const fetchTopratedStart = () => ({
  type: movie.TOPRATED.FETCH_TOPRATED_START,
});

const fetchTopratedSuccess = (data) => ({
  type: movie.TOPRATED.FETCH_TOPRATED_SUCCESS,
  payload: data,
});

const fetchTopratedFailure = (error) => ({
  type: movie.TOPRATED.FETCH_TOPRATED_FAILURE,
  payload: error,
});

export const fetchTopratedStartAsync = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTopratedStart());

      const fetch = await asyncFetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      dispatch(fetchTopratedSuccess(fetch));
    } catch (error) {
      dispatch(fetchTopratedFailure(error.message));
    }
  };
};

/////////////////////////////////////////////////////////
//*Popular movies action
const fetchPopularStart = () => ({
  type: movie.POPULAR.FETCH_POPULAR_START,
});

const fetchPopularSuccess = (data) => ({
  type: movie.POPULAR.FETCH_POPULAR_SUCCESS,
  payload: data,
});
const fetchPopularFailure = (errorMessage) => ({
  type: movie.POPULAR.FETCH_POPULAR_FAILURE,
  payload: errorMessage,
});

export const fetchPopularStartAsync = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPopularStart());

      const fetch = await asyncFetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${page}`
      );
      console.log(fetch);
      dispatch(fetchPopularSuccess(fetch));
    } catch (error) {
      dispatch(fetchPopularFailure(error.message));
    }
  };
};

export const fetchMovieStartAsync = (actionType, page = 1) => {
  return (dispatch) => {
    switch (actionType) {
      case 'upcoming':
        return dispatch(fetchUpcomingMoviesStartAsync(page));
      case 'popular':
        return dispatch(fetchPopularStartAsync(page));
      case 'top-rated':
        return dispatch(fetchTopratedStartAsync(page));
      default:
        return dispatch(fetchUpcomingMoviesStartAsync(page));
    }
  };
};

// const fetchSelectedData = async (geral, page) => {
//   switch (geral) {
//     case 'upcoming':
//       const fetchUpcoming = await asyncFetch(
//         `https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=${page}`
//       );

//       return fetchUpcoming;

//     case 'popular':
//       const fetchPopular = await asyncFetch(
//         `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${page}`
//       );

//       return fetchPopular;

//     case 'top-rated':
//       const fetchToprated = await asyncFetch(
//         `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=${page}`
//       );

//       return fetchToprated;

//     default:
//       return;
//   }
// };

// export const fetchMovieStartAsync = (geral, page = 1) => {
//   return async (dispatch) => {
//     try {
//       dispatch(fetchMovieStart());

//       const getData = await fetchSelectedData(geral, page);

//       dispatch(fetchMovieSuccess(getData));
//     } catch (error) {
//       dispatch(fetchMovieFailure(error.message));
//     }
//   };
// };
