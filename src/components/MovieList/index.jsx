import React from "react";
import { Link } from "react-router-dom";
import Loader from "react-ts-loaders";

import { Category } from "@/components/ui/Category";
import { ROUTER_PATH } from "@/router/PATH/";
import style from "./style.module.scss";

export const MovieList = ({ data }) => {
  {
    console.log(data);
  }
  return (
    <>
      {data ? (
        <div className={style.boxList}>
          <Category title="Список фильмов:" />
          {data.docs.length > 0 ? (
            <ul className={style.movieList}>
              {data?.docs?.map((item) => (
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
          ) : (
            <div className={style.error}>Ничего не найдено 🙃</div>
          )}
        </div>
      ) : (
        <Loader className="loader" color="#f50" size={80} />
      )}
    </>
  );
};
