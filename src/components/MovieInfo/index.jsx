import React from "react";
import { MovieTrailer } from "@/components/MovieTrailer";
import { MovieCast } from "@/components/MovieCast";

export const MovieInfo = ({ data }) => {
  return (
    <div>
      <MovieCast data={data} />
      <MovieTrailer data={data} />
    </div>
  );
};
