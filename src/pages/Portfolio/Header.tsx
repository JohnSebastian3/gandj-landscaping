import React from "react";

const Header = () => {
  return (
    <section
      className={`bg-[url('./assets/img13.jpg')] h-[75vh] bg-dark-green bg-opacity-80 bg-cover bg-center flex justify-center items-center bg-fixed`}
    >
      <div
        className="bg-black bg-opacity-40 w-full h-full flex justify-center
    items-center"
      >
        <header className="w-5/6 md:w-2/3 flex flex-col gap-4">
          <h1 className="text-slate text-4xl font-bold md:text-6xl">
            Our Portfolio
          </h1>
          <h2 className="text-slate text-2xl md:text-3xl">
            Browse some of our past work
          </h2>
        </header>
      </div>
    </section>
  );
};

export default Header;
