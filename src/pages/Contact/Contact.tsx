import React, { useEffect } from "react";
import Content from "./Content";
import Header from "./Header";

const Contact = () => {
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

export default Contact;
