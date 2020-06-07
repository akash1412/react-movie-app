import { LatestOnTv } from "../tv.types";

const INITIAL_STATE = {
  loading: false,
  latest: [],
  errorMessage: null,
};

const latestOnTvReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LatestOnTv.FETCH_LATEST_ON_TV_START:
      return {
        ...state,
        loading: true,
      };

    case LatestOnTv.FETCH_LATEST_ON_TV_SUCCESS:
      return {
        ...state,
        latest: action.payload.results,
        loading: false,
      };

    case LatestOnTv.FETCH_LATEST_ON_TV_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default latestOnTvReducer;
