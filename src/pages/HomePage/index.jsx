import React, { useEffect, useState } from "react";
import { Header } from "@/components/ui/Header";
import { Container } from "@/components/ui/Container";
import { MoviePreview } from "@/components/MoviePreview";
import { MovieList } from "@/components/MovieList";
import { Footer } from "@/components/ui/Footer";
import { getRandomFilm } from "../../api";

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
      <Container>
        <Header />
        <MoviePreview data={randomFilm} />
        <MovieList />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
