import { asyncFetch } from "../../API/fetch";

import { TOPRATED } from "./top-rated.types";

const fetchTopratedStart = () => ({
  type: TOPRATED.FETCH_TOPRATED_START,
});

const fetchTopratedSuccess = (data) => ({
  type: TOPRATED.FETCH_TOPRATED_SUCCESS,
  payload: data,
});

const fetchTopratedFailure = (error) => ({
  type: TOPRATED.FETCH_TOPRATED_FAILURE,
  payload: error,
});

export const fetchTopratedStartAsync = (page = 1) => {
  return async (dispatch) => {
    try {
      dispatch(fetchTopratedStart());

      const fetch = await asyncFetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=${page}`
      );

      dispatch(fetchTopratedSuccess(fetch));
    } catch (error) {
      dispatch(fetchTopratedFailure(error.message));
    }
  };
};
