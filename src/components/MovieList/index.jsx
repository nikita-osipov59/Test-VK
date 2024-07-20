import React, { useEffect, useState } from "react";

import { getListFilm } from "../../api";

import style from "./style.module.scss";
import { Link } from "react-router-dom";

export const MovieList = () => {
  const [listFilm, setListFilm] = useState("");

  const getList = async () => {
    let currentFilm = await getListFilm();
    setListFilm(currentFilm);
    console.log(currentFilm.docs);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className={style.boxList}>
      <p className={style.category}>Список фильмов:</p>
      <ul className={style.movieList}>
        {listFilm?.docs?.map((item) => (
          <li key={item.id}>
            <Link className={style.itemLink} to={item.id}>
              <img
                className={style.poster}
                src={item?.poster.url}
                alt={item.name}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
