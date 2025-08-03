import React from "react";
import Navbar from "../components/Navbar";
import Herobanner from "../components/Herobanner";
import Bio from "../components/Bio";
import Skills from "../components/Skills";
import TestimonialSection from "../components/Testimonials";
import Resume from "../components/Resume";
import CTASection from "../components/Cta";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Herobanner />
      <Bio />
      <Skills />
      <Resume />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
