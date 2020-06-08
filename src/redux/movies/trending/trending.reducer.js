import { TRENDING_MOVIES } from "../movie.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  totalResults: null,
  errorMessage: null,
};

const trendingMoviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRENDING_MOVIES.FETCH_TRENDING_MOVIE_START:
      return {
        ...state,
        loading: true,
      };

    case TRENDING_MOVIES.FETCH_TRENDING_MOVIE_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case TRENDING_MOVIES.FETCH_TRENDING_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default trendingMoviesReducer;
