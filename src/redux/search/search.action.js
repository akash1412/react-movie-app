import axios from 'axios';

import { SEARCH } from './search.types';

const fetchSearchStart = () => ({
  type: SEARCH.FETCH_SEARCH_START,
});

const fetchSearchSuccess = (data) => ({
  type: SEARCH.FETCH_SEARCH_SUCCESS,
  payload: data,
});

const fetchSearchFailure = (error) => ({
  type: SEARCH.FETCH_SEARCH_FAILURE,
  payload: error,
});

export const fetchSearchStartAsync = (query, page = 1) => async (dispatch) => {
  try {
    dispatch(fetchSearchStart());

    const fetch = await axios(
      ` https://api.themoviedb.org/3/search/movie?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&query=${query}&page=${page}&include_adult=false`
    );

    console.log(fetch);

    dispatch(fetchSearchSuccess(fetch.data));
  } catch (error) {
    dispatch(fetchSearchFailure(error.message));
  }
};
