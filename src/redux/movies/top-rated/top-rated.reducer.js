import { TOPRATED_MOVIES } from "./top-rated.types";

const INITIAL_STATE = {
  topRatedMovies: [],
  loading: false,
  errorMessage: null,
};

const TopratedMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_START:
      return {
        ...state,
        loading: true,
      };

    case TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_SUCCESS:
      return {
        ...state,
        topRatedMovies: action.payload,
        loading: false,
      };

    case TOPRATED_MOVIES.FETCH_TOPRATED_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default TopratedMoviesReducer;
