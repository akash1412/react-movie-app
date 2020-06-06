import { PopularOnTV } from "./tv.types";

const INITIAL_STATE = {
  popular: {
    loading: true,
    errorMessgae: null,
    Page: 1,
    totalResults: 10000,
    totalPages: 500,
    data: [],
  },
};

const TvReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PopularOnTV.FETCH_POPULAR_ON_TV_START:
      return {
        ...state,
        popular: {
          ...state.popular,
          loading: true,
        },
      };

    case PopularOnTV.FETCH_POPULAR_ON_TV_SUCCESS:
      return {
        ...state,
        popular: {
          ...state.popular,
          page: action.payload.page,
          // totalResults: action.payload.total_results,
          // totalPages: action.payload.total_pages,
          data: action.payload.results,
          loading: false,
        },
      };

    case PopularOnTV.FETCH_POPULAR_ON_TV_FAILURE:
      return {
        ...state,
        popular: {
          ...state.popular,
          errorMessgae: action.payload,
          loading: false,
        },
      };

    default:
      return state;
  }
};

export default TvReducer;
