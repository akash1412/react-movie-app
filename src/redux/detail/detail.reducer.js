import { DETAIL } from './detail.types';

const INITIAL_STATE = {
  loading: false,
  detail: null,
  cast: [],

  errorMessage: null,
};

const detailReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DETAIL.FETCH_DETAIL_START:
      return {
        ...state,
        loading: true,
      };

    case DETAIL.FETCH_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: action.payload[0],
        cast: action.payload[1].cast,
      };

    case DETAIL.FETCH_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default detailReducer;
