import { TRENDING } from "./trending.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  totalResults: null,
  errorMessage: null,
};

const trendingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TRENDING.FETCH_TRENDING_START:
      return {
        ...state,
        loading: true,
      };

    case TRENDING.FETCH_TRENDING_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case TRENDING.FETCH_TRENDING_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default trendingReducer;
