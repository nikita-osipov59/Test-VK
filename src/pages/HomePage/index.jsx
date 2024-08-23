import React, { useEffect, useMemo, useState } from "react";
import Loader from "react-ts-loaders";

import { getFilmByGenre, getGenreName, getRandomFilm } from "../../api";

import { Container } from "@/components/ui/Container";
import { Header } from "@/components/ui/Header";
import { Main } from "@/components/ui/Main";
import { MoviePreview } from "@/components/MoviePreview";
import { MovieList } from "@/components/MovieList";
import { Footer } from "@/components/ui/Footer";
import { Filter } from "@/components/ui/Filter";

const HomePage = () => {
  const [randomFilm, setRandomFilm] = useState("");
  const [listGenre, setListGenre] = useState("");
  const [listFilm, setListFilm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedYear, setSelectedYear] = useState(1990);
  const [selectedRating, setSelectedRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getRandom = async () => {
    let currentFilm = await getRandomFilm();
    setRandomFilm(currentFilm);
  };

  const getListGenre = async () => {
    let currentList = await getGenreName();
    setListGenre(currentList);
  };

  const getListFilm = async () => {
    let currentFilm = await getFilmByGenre(
      selectedOption,
      selectedYear,
      selectedRating
    );
    setListFilm(currentFilm);
  };

  useEffect(() => {
    getRandom();
  }, []);

  useMemo(() => {
    getListGenre();
    getListFilm();
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading ? (
        <Container>
          <Header />
          <Main>
            <MoviePreview data={randomFilm} />
            <Filter
              data={listGenre}
              onClickOption={(genre) => setSelectedOption(genre)}
              onClickYear={(year) => setSelectedYear(year)}
              onClickRating={(rating) => setSelectedRating(rating)}
              onClickFetch={() =>
                getListFilm(selectedOption, selectedYear, selectedRating)
              }
              dataYear={selectedYear}
              dataRating={selectedRating}
            />
            <MovieList data={listFilm} />
          </Main>
          <Footer />
        </Container>
      ) : (
        <Loader className="loader" color="#f50" size={80} />
      )}
    </>
  );
};

export default HomePage;
