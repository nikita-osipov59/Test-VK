import React from "react";
import { Link } from "react-router-dom";

import { Logo } from "../icons/Logo";
import { ROUTER_PATH } from "@/router/PATH/";

import style from "./style.module.scss";

export const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to={ROUTER_PATH.HOME} className={style.logo}>
          <Logo size={44} />
        </Link>
      </nav>
    </header>
  );
};
