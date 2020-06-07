import { TopRatedOnTv } from "../tv.types";

const INITIAL_STATE = {
  loading: false,
  totalResults: null,
  totalPages: null,
  data: [],
  errorMessage: null,
};

const topRatedOnTvReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TopRatedOnTv.FETCH_TOP_RATED_ON_TV_START:
      return {
        ...state,
        loading: true,
      };

    case TopRatedOnTv.FETCH_TOP_RATED_ON_TV_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case TopRatedOnTv.FETCH_TOP_RATED_ON_TV_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default topRatedOnTvReducer;
