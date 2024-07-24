import React, { useEffect, useState } from "react";
import Loader from "react-ts-loaders";

import { getRandomFilm } from "../../api";

import { Header } from "@/components/ui/Header";
import { Container } from "@/components/ui/Container";
import { MoviePreview } from "@/components/MoviePreview";
import { MovieList } from "@/components/MovieList";
import { Footer } from "@/components/ui/Footer";

const HomePage = () => {
  const [randomFilm, setRandomFilm] = useState("");

  const getRandom = async () => {
    let currentFilm = await getRandomFilm();
    setRandomFilm(currentFilm);
    console.log(currentFilm);
  };

  useEffect(() => {
    getRandom();
  }, []);
  return (
    <>
      {randomFilm ? (
        <Container>
          <Header />
          <MoviePreview data={randomFilm} />
          <MovieList />
          <Footer />
        </Container>
      ) : (
        <Loader className="loader" color="#f50" size={80} />
      )}
    </>
  );
};

export default HomePage;
