import { UPCOMING } from './upcoming.type';

const INITIAL_STATE = {
  loading: false,
  data: [],
  page: null,
  totalPages: null,
  errorMessage: null,
};

const UpcomingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPCOMING.FETCH_UPCOMING_START:
      return {
        ...state,
        loading: true,
      };

    case UPCOMING.FETCH_UPCOMING_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        currentPage: action.payload.page,
        totalPages: action.payload.total_pages,
        loading: false,
      };

    case UPCOMING.FETCH_UPCOMING_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default UpcomingReducer;
