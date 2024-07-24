import React from "react";
import { Link } from "react-router-dom";

import { ROUTER_PATH } from "@/router/PATH/";
import { Logo } from "@/components/ui/icons/Logo";
import style from "./style.module.scss";

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <nav>
        <Link to={ROUTER_PATH.HOME} className={style.logo}>
          <Logo size={44} />
        </Link>
      </nav>
    </footer>
  );
};
