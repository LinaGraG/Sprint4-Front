import React from "react";

import MetaData from "../components/layout/metadata/MetaData";

import WhyArtelak from "../components/WhyArtelak";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <MetaData title="Inicio" />
      <section>
        <br />
        <Hero />
        <br />
        <WhyArtelak />
        <br />
        <Features />
        <br />
      </section>
    </>
  );
};

export default Home; //Arrow funtion atajo: rafce
