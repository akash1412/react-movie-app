import RECOMMEND from './recommend.type';

const INITIAL_STATE = {
  loading: false,
  totalPages: null,
  page: null,
  data: [],
  errorMessage: null,
};

const recommendReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECOMMEND.FETCH_RECOMMEND_START:
      return {
        ...state,
        loading: true,
      };

    case RECOMMEND.FETCH_RECOMMEND_SUCCESS:
      return {
        ...state,
        loading: false,
        page: action.payload.page,
        totalPages: action.payload.total_pages,
        data: action.payload.results,
      };

    case RECOMMEND.FETCH_RECOMMEND_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default recommendReducer;
