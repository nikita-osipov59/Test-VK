import React, { useEffect, useState } from "react";
import { getRandomFilm } from "../../api";
import { Play } from "@/components/ui/icons/Play";

import style from "./style.module.scss";

export const Hero = () => {
  const [randomFilm, setRandomFilm] = useState("");

  const getRandom = async () => {
    let currentFilm = await getRandomFilm();
    setRandomFilm(currentFilm);
    console.log(currentFilm);
  };

  useEffect(() => {
    getRandom();
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
            <span>{randomFilm?.rating.imdb}⭐</span>
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
        <button className={style.button}>
          Смотреть <Play />
        </button>
      </div>
    </>
  );
};
