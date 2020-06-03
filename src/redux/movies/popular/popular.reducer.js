import { POPULAR_MOVIES } from "./popular.types";

const INITIAL_STATE = {
  loading: false,
  popularMovies: [],
  errorMessage: null,
};

const MoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULAR_MOVIES.FETCH_POPULAR_MOVIE_START:
      return {
        ...state,
        loading: true,
      };

    case POPULAR_MOVIES.FETCH_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        popularMovies: action.payload,
        loading: false,
      };

    case POPULAR_MOVIES.FETCH_POPULAR_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default MoviesReducer;
