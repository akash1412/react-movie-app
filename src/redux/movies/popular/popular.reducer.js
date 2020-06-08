import { POPULAR_MOVIES } from "../movie.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  totalResults: null,
  errorMessage: null,
};

const popularMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULAR_MOVIES.FETCH_POPULAR_MOVIE_START:
      return {
        ...state,
        loading: true,
      };

    case POPULAR_MOVIES.FETCH_POPULAR_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
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

export default popularMoviesReducer;
