import React from "react";

const Hero = () => {

  return (
    <section
      className={`bg-[url('./assets/hero3.jpg')] h-[100vh] bg-cover bg-center flex justify-center items-center`}
    >
      <header className="w-5/6 md:w-2/3 flex flex-col gap-4">
        <h1 className="text-slate text-4xl font-bold">G & J Landscaping</h1>
        <h2 className="text-slate text-2xl">Redefining outdoor experiences since 1989</h2>
      </header>
    </section>
  );
};

export default Hero;
