import { useEffect } from "react";
import Intro from "./Intro";
import Services from "./Services";
// import Testimonials from "./Testimonials";

const Content = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Intro />
      <Services />
      {/* <Testimonials /> */}
    </>
  );
};

export default Content;
