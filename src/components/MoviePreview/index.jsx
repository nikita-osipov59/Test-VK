import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.scss";
import { ROUTER_PATH } from "@/router/PATH/";
import { Play } from "@/components/ui/icons/Play";

export const MoviePreview = ({ data }) => {
  return (
    <>
      <div className={style.filmBox}>
        <h2>{data && <img className={style.logo} src={data?.logo.url} />}</h2>
        <h1>{data && data?.name}</h1>
        {data && (
          <div className={style.content}>
            <span>
              <img className={style.imdb} src="/imdb.png" alt="imdb" />
              {data?.rating.imdb}⭐
            </span>
            <p>{data && data?.year}</p>
            <ul className={style.genreList}>
              {data?.genres.map((genre, index) => {
                return <li key={index}>{genre.name},</li>;
              })}
            </ul>
            <span>{data?.ageRating}+</span>
          </div>
        )}
        <p className={style.description}>{data && data?.description}</p>
        <img
          className={style.bgFilm}
          src={data && data?.poster.url}
          alt={data?.name}
        />
        <Link className={style.button} to={ROUTER_PATH.MOVIE + `/${data.id}`}>
          Смотреть <Play />
        </Link>
      </div>
    </>
  );
};
