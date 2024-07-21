import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getFilmById } from "../../api";
import { Container } from "@/components/ui/Container";
import { Header } from "@/components/ui/Header";
import { MoviePreview } from "@/components/MoviePreview";
import { MovieInfo } from "@/components/MovieInfo";
import { Footer } from "@/components/ui/Footer";

const MoviePage = () => {
  const [filmId, setFilmId] = useState("");
  const { id } = useParams();

  const getId = async () => {
    let currentFilm = await getFilmById(id);
    setFilmId(currentFilm);
    console.log(currentFilm);
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <>
      <Container>
        <Header />
        <MoviePreview data={filmId} />
        <MovieInfo data={filmId} />
        <Footer />
      </Container>
    </>
  );
};

export default MoviePage;
