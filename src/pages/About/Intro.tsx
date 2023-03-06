import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <section className="text-dark-green py-24 md:py-48 w-5/6 md:w-2/3 mx-auto">
      <div className="flex flex-col gap-4 text-center md:gap-12 md:text-left">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: -60 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-2xl md:text-4xl text-center"
        >
          Our story
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          At G & J Landscaping, we believe that your outdoor space should be a
          beautiful and functional extension of your home or business. Our team
          is dedicated to designing, installing, and maintaining custom
          landscapes that meet your unique needs and budget.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          Whether you're looking for lawn care, garden design, tree services, or
          outdoor lighting, we have the knowledge and expertise to help you
          achieve your vision. We use only the highest quality materials and
          equipment to ensure that your landscaping looks great and lasts for
          years to come.
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 1 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
          className=""
        >
          <Link
            to={"/contact"}
            className="text-green hover:border-b-2 hover:border-b-green transition duration-200"
          >
            Contact us
          </Link>{" "}
          today to schedule a consultation and see how we can transform your
          outdoor space into a beautiful and functional oasis.
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
