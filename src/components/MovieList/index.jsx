import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { getListFilm } from "../../api";

import { Category } from "@/components/ui/Category";
import { ROUTER_PATH } from "@/router/PATH/";
import style from "./style.module.scss";

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
      <Category title="Список фильмов:" />
      <ul className={style.movieList}>
        {listFilm?.docs?.map((item) => (
          <li key={item.id}>
            <Link
              className={style.itemLink}
              to={ROUTER_PATH.MOVIE + `/${item.id}`}
            >
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
