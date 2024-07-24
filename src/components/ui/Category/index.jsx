import React from "react";

import style from "./style.module.scss";

export const Category = ({ title }) => {
  return <p className={style.category}>{title}</p>;
};
