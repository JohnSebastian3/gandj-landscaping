import React from "react";

const Hero = () => {
  return (
    <section
      className={`bg-[url('./assets/hero2.jpg')] h-[75vh] bg-cover bg-center flex justify-center items-center bg-fixed`}
    >
      <div
        className="bg-black bg-opacity-40 w-full h-full flex justify-center
      items-center"
      >
        <header className="w-5/6 md:w-2/3 flex flex-col gap-4">
          <h1 className="text-slate text-4xl font-bold">About Us</h1>
          <h2 className="text-slate text-2xl">
            Some random lorem ipsum here for filler
          </h2>
        </header>
      </div>
    </section>
  );
};

export default Hero;
