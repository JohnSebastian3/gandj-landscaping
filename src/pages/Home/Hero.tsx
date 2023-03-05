import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiChevronDown } from "react-icons/fi";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      className={`bg-[url('./assets/img2.jpg')] h-[100vh] bg-dark-green bg-opacity-80 bg-cover bg-center flex justify-center items-center bg-fixed`}
    >
      <div
        className="bg-black bg-opacity-50 w-full h-full flex justify-center
    items-center"
      >
        <header className="w-5/6 md:w-2/3 flex flex-col gap-4">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-slate text-4xl font-bold md:text-6xl"
          >
            G & J Landscaping
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.8, delay: 1 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-slate text-2xl md:text-3xl"
          >
            Redifining outdoor experiences since 1994
          </motion.h2>
        </header>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 2 }}
          variants={{
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 },
          }}
          className="absolute bottom-20"
        >
          <AnchorLink href="#intro">
            <FiChevronDown className="text-4xl" />
          </AnchorLink>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
