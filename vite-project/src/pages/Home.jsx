import React from "react";
import Navbar from "../components/Navbar";
import Herobanner from "../components/Herobanner";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import TestimonialSection from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <Bio />
      <Skills />
      <TestimonialSection />
    </>
  );
};

export default Home;
