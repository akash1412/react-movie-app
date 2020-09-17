import { asyncFetch } from '../../API/fetch';

import { UPCOMING } from './upcoming.type';

const fetchUpcomingMoviesStart = () => ({
  type: UPCOMING.FETCH_UPCOMING_START,
});

const fetchUpcomingMoviesSuccess = (data) => ({
  type: UPCOMING.FETCH_UPCOMING_SUCCESS,
  payload: data,
});

const fetchUpcomingMoviesFailure = (error) => ({
  type: UPCOMING.FETCH_UPCOMING_FAILURE,
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
