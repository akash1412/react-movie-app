import { asyncFetch } from '../../API/fetch';
import GENRE from './genre.type';

const fetchGenreStart = () => ({
  type: GENRE.FETCH_GENRE_START,
});

const fetchGenreSuccess = (data) => ({
  type: GENRE.FETCH_GENRE_SUCCESS,
  payload: data,
});

const fetchGenreFailure = (error) => ({
  type: GENRE.FETCH_GENRE_FAILURE,
  payload: error,
});

export const fetchGenreStartAsync = (genre, page = 1) => async (dispatch) => {
  try {
    dispatch(fetchGenreStart());

    const fetch = await asyncFetch(
      `https://api.themoviedb.org/3/search/movie?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&query=${genre}&page=${page}&include_adult=false`
    );

    dispatch(fetchGenreSuccess(fetch));
  } catch (error) {
    dispatch(fetchGenreFailure(error.message));
  }
};
