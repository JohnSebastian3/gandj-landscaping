import Header from "./Header";
import Content from "./Content";
import { useEffect } from "react";

const About = () => {
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

export default About;
