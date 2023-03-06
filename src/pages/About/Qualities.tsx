import { TfiIdBadge } from "react-icons/tfi";
import { SlBadge } from "react-icons/sl";
import { IoIosTimer } from "react-icons/io";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { motion } from "framer-motion";

const Qualities = () => {
  return (
    <section className="text-slate bg-green">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-center text-2xl md:text-4xl pt-24 md:pt-36"
      >
        How we stand out
      </motion.h3>
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 pt-12 pb-24 md:pb-36 md:pt-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 py-8 border-b sm:border-r sm:px-4 border-slate border-opacity-10"
        >
          <div className="flex flex-col gap-4 items-center">
            <SlBadge className="text-4xl" />
            <h3>Experience & Expertise</h3>
          </div>
          <p>
            We have a team of experienced professionals with extensive knowledge
            and skills in all aspects of landscaping.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 py-8 border-b sm:px-4 border-slate border-opacity-10"
        >
          <div className="flex flex-col gap-4 items-center">
            <TfiIdBadge className="text-4xl" />
            <h3>Professionalism</h3>
          </div>
          <p>
            We conduct business in a professional manner, including timely
            response to inquiries, clear and concise contracts, and ethical
            practices.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 py-8 border-b sm:border-r sm:px-4 sm:border-b-0 border-slate border-opacity-10"
        >
          <div className="flex flex-col gap-4 items-center">
            <IoIosTimer className="text-4xl" />
            <h3>Timely Delivery</h3>
          </div>
          <p>
            We complete our projects within the agreed time frame, ensuring that
            it does not cause any inconvenience to you.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.8 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 sm:px-4 py-8"
        >
          <div className="flex flex-col gap-4 items-center">
            <HiOutlineWrenchScrewdriver className="text-4xl" />
            <h3>Ongoing Maintenance</h3>
          </div>
          <p>
            We provide ongoing maintenance services to ensure that the landscape
            remains healthy and beautiful for years to come.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Qualities;
