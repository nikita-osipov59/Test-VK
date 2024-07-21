import React from "react";

import style from "./style.module.scss";

export const MovieTrailer = ({ data }) => {
  return (
    <div>
      <p className={style.title}>Трейлер:</p>
      {data && (
        <iframe className={style.video} src={data.videos.trailers[0].url} />
      )}
    </div>
  );
};
