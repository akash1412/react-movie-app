import { SEARCH } from './search.types';

const INITIAL_STATE = {
  loading: false,

  data: [],
  totalPages: null,
  page: null,
  errorMessage: null,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SEARCH.FETCH_SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case SEARCH.FETCH_SEARCH_SUCCESS:
      return {
        ...state,

        data: action.payload.results,
        totalPages: action.payload.total_pages,
        page: action.payload.page,
        loading: false,
      };

    case SEARCH.FETCH_SEARCH_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
