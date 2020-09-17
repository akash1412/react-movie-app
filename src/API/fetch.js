import axios from 'axios';

const API_KEY = '7f9064828b08b49a74ff8900e1c2bf5d';

export async function asyncFetch(url) {
  const URL = url.replace('<<api_key>>', API_KEY);

  const fetch = await axios(URL);

  return fetch.data;
}

export async function detailsFetch(url) {
  const fetch = await axios(url);

  return fetch.data;
  // return fetch.data
}

//https://api.themoviedb.org/3/movie/upcoming?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&page=1
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
