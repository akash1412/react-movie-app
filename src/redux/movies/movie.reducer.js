import * as types from './movie.types';

const INITIAL_STATE = {
  loading: false,
  data: [],
  totalPages: null,
  currentPage: null,
  errorMessage: null,
};

const movieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.POPULAR.FETCH_POPULAR_START:
    case types.TOPRATED.FETCH_TOPRATED_START:
    case types.TRENDING.FETCH_TRENDING_START:
    case types.UPCOMING.FETCH_UPCOMING_START:
      return {
        ...state,
        loading: true,
      };

    case types.POPULAR.FETCH_POPULAR_SUCCESS:
    case types.TOPRATED.FETCH_TOPRATED_SUCCESS:
    case types.TRENDING.FETCH_TRENDING_SUCCESS:
    case types.UPCOMING.FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        totalPages: action.payload.total_pages,
        currentPage: action.payload.page,
        loading: false,
      };

    case types.POPULAR.FETCH_POPULAR_FAILURE:
    case types.TOPRATED.FETCH_TOPRATED_FAILURE:
    case types.TRENDING.FETCH_TRENDING_FAILURE:
    case types.UPCOMING.FETCH_UPCOMING_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
