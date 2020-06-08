import { DISCOVER_MOVIES } from "../movie.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  totalResults: null,
  errorMessgae: null,
};

const discoverMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_START:
      return {
        ...state,
        loading: true,
      };
    case DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case DISCOVER_MOVIES.FETCH_DISCOVER_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessgae: action.payload,
      };

    default:
      return state;
  }
};

export default discoverMovieReducer;
