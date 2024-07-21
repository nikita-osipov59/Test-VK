import React, { useEffect, useState } from "react";
import { getRandomFilm } from "../../api";
import { Play } from "@/components/ui/icons/Play";
import { ROUTER_PATH } from "@/router/PATH/";

import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [randomFilm, setRandomFilm] = useState("");

  const getRandom = async () => {
    let currentFilm = await getRandomFilm();
    setRandomFilm(currentFilm);
    console.log(currentFilm);
  };

  useEffect(() => {
    // getRandom();
  }, []);

  return (
    <>
      <div className={style.filmBox}>
        <h2>
          {randomFilm ? (
            <img className={style.logo} src={randomFilm?.logo.url} />
          ) : (
            "Загрузка.."
          )}
        </h2>
        <h1>{randomFilm ? randomFilm?.name : "Загрузка.."}</h1>
        {randomFilm ? (
          <div className={style.content}>
            <span>
              <img className={style.imdb} src="/imdb.png" alt="imdb" />
              {randomFilm?.rating.imdb}⭐
            </span>
            <p>{randomFilm ? randomFilm?.year : "Загрузка.."}</p>
            <ul className={style.genreList}>
              {randomFilm?.genres.map((genre, index) => {
                return <li key={index}>{genre.name},</li>;
              })}
            </ul>
            <span>{randomFilm?.ageRating}+</span>
          </div>
        ) : (
          "Загрузка.."
        )}
        <p className={style.description}>
          {randomFilm ? randomFilm?.description : "Загрузка.."}
        </p>
        <img
          className={style.bgFilm}
          src={randomFilm ? randomFilm?.poster.url : "Загрузка.."}
          alt={randomFilm?.name}
        />
        <Link
          className={style.button}
          to={ROUTER_PATH.MOVIE + `/${randomFilm.id}`}
        >
          Смотреть <Play />
        </Link>
      </div>
    </>
  );
};
