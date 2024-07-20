import React from "react";
import { Header } from "@/components/ui/Header";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";

const HomePage = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
      </Container>
    </>
  );
};

export default HomePage;
