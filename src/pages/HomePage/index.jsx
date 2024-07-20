import React from "react";
import { Header } from "@/components/ui/Header";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/Hero";
import { MovieList } from "@/components/MovieList";
import { Footer } from "@/components/ui/Footer";

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <MovieList />
        <Footer />
      </Container>
    </>
  );
};

export default HomePage;
