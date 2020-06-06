import axios from "axios";

const API_KEY = "7f9064828b08b49a74ff8900e1c2bf5d";

export async function asyncFetch(url) {
  const URL = url.replace("<<api_key>>", API_KEY);

  const fetch = await axios(URL);

  return fetch.data.results;
}

export async function asyncTVShowsFetch(url) {
  const URL = url.replace("<<api_key>>", API_KEY);

  const fetch = await axios(URL);

  fetch.data.results.forEach((data) => {
    data.poster_path = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  });

  return fetch.data;
}

//https://api.themoviedb.org/3/movie/upcoming?api_key=7f9064828b08b49a74ff8900e1c2bf5d&language=en-US&page=1
