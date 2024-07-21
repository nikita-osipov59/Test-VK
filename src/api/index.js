import axios from "axios";

export const getRandomFilm = async () => {
  const response = await axios
    .get(
      "https://api.kinopoisk.dev/v1.4/movie/random?notNullFields=videos.trailers.url&notNullFields=name&notNullFields=description&notNullFields=rating.imdb&notNullFields=logo.url&notNullFields=poster.url&notNullFields=ageRating&notNullFields=year",
      {
        headers: {
          accept: "application/json",
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      }
    )
    .then(({ data }) => {
      let res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

export const getListFilm = async () => {
  const response = await axios
    .get(
      "https://api.kinopoisk.dev/v1.4/movie?limit=50&notNullFields=videos.trailers.url&name&notNullFields=description&notNullFields=rating.imdb&notNullFields=logo.url&notNullFields=poster.url&notNullFields=ageRating&notNullFields=year",
      {
        headers: {
          accept: "application/json",
          "X-API-KEY": import.meta.env.VITE_API_KEY,
        },
      }
    )
    .then(({ data }) => {
      let res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};

export const getFilmById = async (id) => {
  const response = await axios
    .get(`https://api.kinopoisk.dev/v1.4/movie/${id}`, {
      headers: {
        accept: "application/json",
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    })
    .then(({ data }) => {
      let res = data;
      return res;
    })
    .catch(function (error) {
      console.log(error);
    });
  return response;
};
