import React from "react";
import Navbar from "../components/Navbar";
import Herobanner from "../components/Herobanner";
import Bio from "../components/Bio";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <Bio />
      <Skills />
    </>
  );
};

export default Home;
