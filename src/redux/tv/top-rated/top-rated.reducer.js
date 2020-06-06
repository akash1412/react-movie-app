import { TopRatedOnTv } from "../tv.types";

const INITIAL_STATE = {
  loading: false,
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
