import { TOPRATED } from "./top-rated.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  page: null,
  errorMessage: null,
};

const topRatedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOPRATED.FETCH_TOPRATED_START:
      return {
        ...state,
        loading: true,
      };

    case TOPRATED.FETCH_TOPRATED_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        page: action.payload.page,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case TOPRATED.FETCH_TOPRATED_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default topRatedReducer;
