import React from "react";
import Loader from "react-ts-loaders";

import style from "./style.module.scss";
import { ROUTER_PATH } from "@/router/PATH/";
import { Button } from "@/components/ui/Button";

export const MoviePreview = ({ data }) => {
  return (
    <>
      {data ? (
        <div className={style.filmBox}>
          <h2>
            <img className={style.logo} src={data?.logo.url} alt={data?.name} />
          </h2>
          <h1>{data && data?.name}</h1>
          <div className={style.content}>
            <img className={style.imdb} src="/imdb.png" alt="imdb" />
            {data?.rating.imdb}⭐<p>{data && data?.year}</p>
            <ul className={style.genreList}>
              {data?.genres.map((genre, index) => {
                return <li key={index}>{genre.name},</li>; //{TODO: Ограничить до 4 жанров}
              })}
            </ul>
            <span>{data?.ageRating}+</span>
          </div>
          <p className={style.description}>{data && data?.description}</p>
          <img
            className={style.bgFilm}
            src={data && data?.poster.url}
            alt={data?.name}
          />
          <Button title="Смотреть" to={ROUTER_PATH.MOVIE + `/${data.id}`} />
        </div>
      ) : (
        <Loader className="loader" color="#f50" size={80} />
      )}
    </>
  );
};
