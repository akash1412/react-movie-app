import { detailsFetch, asyncFetch } from '../../API/fetch';

import axios from 'axios';

import { DETAIL } from './detail.types';

const fetchDetailStart = () => ({
  type: DETAIL.FETCH_DETAIL_START,
});

const fetchDetailSuccess = (data) => ({
  type: DETAIL.FETCH_DETAIL_SUCCESS,
  payload: data,
});

const fetchDetailFailure = (error) => ({
  type: DETAIL.FETCH_DETAIL_FAILURE,
  payload: error,
});

export const fetchDetailStartAsync = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchDetailStart());

      const details = await detailsFetch(
        `
        https://api.themoviedb.org/3/movie/${id}?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US`
      );

      const getCast = await axios(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=7f9064828b08b49a74ff8900e1c2bf5d`
      );

      Promise.all([details, getCast.data]).then((data) => {
        dispatch(fetchDetailSuccess(data));
      });
    } catch (error) {
      dispatch(fetchDetailFailure(error.message));
    }
  };
};
