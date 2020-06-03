import { UPCOMING_MOVIES } from "./upcoming.types";
import { asyncFetch } from "../../../API/fetch";

const fetchUpcomingMoviesStart = () => ({
  type: UPCOMING_MOVIES.FETCH_UPCOMING_START,
});

const fetchUpcomingMoviesSuccess = (upcomingMovies) => ({
  type: UPCOMING_MOVIES.FETCH_UPCOMING_SUCCESS,
  payload: upcomingMovies,
});

const fetchUpcomingMoviesFailure = (error) => ({
  type: UPCOMING_MOVIES.FETCH_UPCOMING_FAILURE,
  payload: error,
});

export const fetchUpcomingMoviesStartAsync = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchUpcomingMoviesStart());

      const movies = await asyncFetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1"
      );

      movies.forEach((movie) => {
        movie.poster_path = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      });

      dispatch(fetchUpcomingMoviesSuccess(movies));
    } catch (error) {
      dispatch(fetchUpcomingMoviesFailure(error.message));
    }
  };
};
