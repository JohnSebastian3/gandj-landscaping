import React, { useEffect } from "react";
import Content from "./Content";
import Header from "./Header";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Portfolio;
