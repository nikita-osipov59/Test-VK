import React from "react";
import { Link } from "react-router-dom";

import { Play } from "@/components/ui/icons/Play";
import style from "./style.module.scss";

export const Button = ({ title, to }) => {
  return (
    <Link className={style.button} to={to}>
      {title} <Play />
    </Link>
  );
};
