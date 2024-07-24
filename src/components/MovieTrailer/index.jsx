import React from "react";

import style from "./style.module.scss";
import { Category } from "@/components/ui/Category";

export const MovieTrailer = ({ data }) => {
  return (
    <div>
      <Category title="Трейлер:" />
      {data && (
        <iframe className={style.video} src={data.videos.trailers[0].url} />
      )}
    </div>
  );
};
