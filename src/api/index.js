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

export const getGenreName = async () => {
  const response = await axios
    .get(
      "https://api.kinopoisk.dev/v1/movie/possible-values-by-field?field=genres.name",
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

export const getFilmByGenre = async (genre, dataYear, dataRating) => {
  const response = await axios
    .get(
      `https://api.kinopoisk.dev/v1.4/movie?page=1&limit=50&${
        dataRating && `rating.imdb=${dataRating}`
      }&selectFields=videos&selectFields=description&selectFields=rating&selectFields=logo&selectFields=poster&selectFields=ageRating&selectFields=year&${
        dataYear && `year=${dataYear}`
      }&selectFields=id&selectFields=name&selectFields=genres&notNullFields=videos.trailers.url&notNullFields=description&notNullFields=rating.imdb&notNullFields=logo.url&notNullFields=poster.url&notNullFields=ageRating&notNullFields=year&notNullFields=id&notNullFields=persons.name&notNullFields=persons.description&notNullFields=logo.url&notNullFields=poster.url&notNullFields=name&notNullFields=genres.name${
        genre && `&genres.name=${genre}`
      }`,
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
