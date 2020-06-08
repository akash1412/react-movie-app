import { UPCOMING_MOVIES } from "../movie.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalResults: null,
  totalPages: null,
  errorMessage: null,
};

const UpcomingMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPCOMING_MOVIES.FETCH_UPCOMING_START:
      return {
        ...state,
        loading: true,
      };

    case UPCOMING_MOVIES.FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case UPCOMING_MOVIES.FETCH_UPCOMING_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default UpcomingMoviesReducer;
