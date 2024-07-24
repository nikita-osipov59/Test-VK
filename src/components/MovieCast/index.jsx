import React from "react";

import style from "./style.module.scss";
import { Category } from "@/components/ui/Category";

export const MovieCast = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <Category title="В ролях:" />
          <ul className={style.castList}>
            {data.persons.map((item) => {
              return (
                <li className={style.castItem} key={item.id}>
                  <img
                    className={style.photo}
                    src={item?.photo}
                    alt={item?.name}
                  />
                  <p className={style.role}>
                    {item.description ? item.description : item.profession}
                  </p>
                  <h3>{item.name}</h3>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </>
  );
};
