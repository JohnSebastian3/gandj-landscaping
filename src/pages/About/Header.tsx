import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      variants={{
        hidden: { opacity: 0.4 },
        visible: { opacity: 1 },
      }}
      className={`bg-[url('./assets/img5.jpg')] h-[75vh] bg-cover bg-center flex justify-center items-center bg-fixed`}
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
            transition={{ duration: 1, delay: 0.6 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-slate text-4xl font-bold md:text-6xl"
          >
            About Us
          </motion.h1>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 1 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
            className="text-slate text-2xl md:text-3xl"
          >
            We are a team of experienced and passionate professionals
          </motion.h2>
        </header>
      </div>
    </motion.section>
  );
};

export default Hero;
