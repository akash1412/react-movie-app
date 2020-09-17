import { asyncFetch } from "../../API/fetch";

import { POPULAR } from "./popular.types";

const fetchPopularStart = () => ({
  type: POPULAR.FETCH_POPULAR_START,
});

const fetchPopularSuccess = (data) => ({
  type: POPULAR.FETCH_POPULAR_SUCCESS,
  payload: data,
});
const fetchPopularFailure = (errorMessage) => ({
  type: POPULAR.FETCH_POPULAR_FAILURE,
  payload: errorMessage,
});

export const fetchPopularStartAsync = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchPopularStart());

      const fetch = await asyncFetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      dispatch(fetchPopularSuccess(fetch));
    } catch (error) {
      dispatch(fetchPopularFailure(error.message));
    }
  };
};
