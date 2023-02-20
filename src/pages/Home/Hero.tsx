import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      className={`bg-[url('./assets/img2.jpg')] h-[100vh] bg-dark-green bg-opacity-80 bg-cover bg-center flex justify-center items-center bg-fixed`}
    >
      <div
        className="bg-black bg-opacity-30 w-full h-full flex justify-center
    items-center"
      >
        <header className="w-5/6 md:w-2/3 flex flex-col gap-4">
          <h1 className="text-slate text-4xl font-bold md:text-6xl">
            G & J Landscaping
          </h1>
          <h2 className="text-slate text-2xl md:text-3xl">
            Redifining outdoor experiences since 1994
          </h2>
        </header>
        <div className="absolute bottom-20">
          <AnchorLink href="#intro">
            <FiChevronDown className="text-4xl" />
          </AnchorLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
