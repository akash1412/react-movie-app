import { PopularOnTV } from "../tv.types";

const INITIAL_STATE = {
  loading: false,
  errorMessgae: null,
  totalResults: null,
  totalPages: null,
  data: [],
};

export const popularOnTvReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopularOnTV.FETCH_POPULAR_ON_TV_START:
      return {
        ...state,
        loading: true,
      };

    case PopularOnTV.FETCH_POPULAR_ON_TV_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalResults: action.payload.total_results,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case PopularOnTV.FETCH_POPULAR_ON_TV_FAILURE:
      return {
        ...state,
        errorMessgae: action.payload,
      };

    default:
      return state;
  }
};

export default popularOnTvReducer;

//////////////////////////////////////
