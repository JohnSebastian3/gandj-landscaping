import React from "react";
import Footer from "../../components/Footer";
import Hero from "./Hero";
import Main from "./Main";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <Main />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Landing;
