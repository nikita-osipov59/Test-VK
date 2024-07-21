import React from "react";

import style from "./style.module.scss";

export const MovieCast = ({ data }) => {
  return (
    <>
      {data && (
        <>
          <p className={style.title}>В ролях:</p>
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
