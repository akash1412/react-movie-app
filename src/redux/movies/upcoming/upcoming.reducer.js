import { UPCOMING_MOVIES } from "./upcoming.types";

const INITIAL_STATE = {
  upcomingMovies: [],
  loading: false,
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
        upcomingMovies: action.payload,
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
