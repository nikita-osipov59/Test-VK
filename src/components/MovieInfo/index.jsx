import React from "react";

import { MovieCast } from "@/components/MovieCast";
import { MovieTrailer } from "@/components/MovieTrailer";

export const MovieInfo = ({ data }) => {
  return (
    <div>
      <MovieCast data={data} />
      <MovieTrailer data={data} />
    </div>
  );
};
