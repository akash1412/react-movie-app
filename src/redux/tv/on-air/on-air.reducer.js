import { OnAirOnTv } from "../tv.types";

const INITIAL_STATE = {
  loading: false,
  data: [],
  errorMessage: null,
};

const onAirOnTvReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OnAirOnTv.FETCH_ON_AIR_ON_TV_START:
      return {
        ...state,
        loading: true,
      };

    case OnAirOnTv.FETCH_ON_AIR_ON_TV_SUCCESS:
      return {
        ...state,
        data: action.payload.results,
        loading: false,
      };

    case OnAirOnTv.FETCH_ON_AIR_ON_TV_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default onAirOnTvReducer;
