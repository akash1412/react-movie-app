import { DISCOVER_MOVIES } from "./discover.type";

const INITIAL_STATE = {
  loading: false,
  discoverMovies: [],
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
        discoverMovies: action.payload,
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
