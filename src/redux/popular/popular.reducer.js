import { POPULAR } from "./popular.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  currentPage: null,
  errorMessage: null,
};

const popularReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULAR.FETCH_POPULAR_START:
      return {
        ...state,
        loading: true,
      };

    case POPULAR.FETCH_POPULAR_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalPages: action.payload.total_pages,
        currentPage: action.payload.page,
        loading: false,
      };

    case POPULAR.FETCH_POPULAR_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default popularReducer;
