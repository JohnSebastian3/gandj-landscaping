import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section
      id="intro"
      className="text-dark-green py-24 md:py-48 w-5/6 md:w-2/3 mx-auto"
    >
      <div className="flex flex-col gap-4 md:gap-12">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-center text-2xl md:text-4xl"
        >
          The best landscaping service in Long Island{" "}
        </motion.h3>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
          className="text-center md:text-left"
        >
          G & J Landscaping is a family-owned and operated landscaping company
          that has been providing top-notch lawn care services to the local
          community in Long Island, NY for over 25 years. Our team of
          experienced landscapers are passionate about creating beautiful,
          thriving outdoor spaces for our clients.{" "}
          <Link
            to={"/contact"}
            className="text-green hover:border-b-2 hover:border-b-green transition duration-200"
          >
            Contact us
          </Link>{" "}
          today to schedule your consultation and start turning your outdoor
          dreams into a reality!
          <p></p>
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
