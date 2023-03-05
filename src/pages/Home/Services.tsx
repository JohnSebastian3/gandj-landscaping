import { RiQuestionAnswerLine } from "react-icons/ri";
import {
  MdOutlineDesignServices,
  MdAutorenew,
  MdOutlineWaterDrop,
} from "react-icons/md";
import { GiHighGrass } from "react-icons/gi";
import { BiWrench } from "react-icons/bi";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="text-dark-green bg-sand">
      <motion.h3
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="pt-24 md:pt-36 text-center text-2xl md:text-4xl"
      >
        Our Services
      </motion.h3>
      <div className="w-5/6 md:w-2/3 mx-auto flex flex-col sm:grid sm:grid-rows-2 sm:grid-cols-3 pb-24 pt-12 md:pb-36 md:pt-24 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 border-b sm:border-r py-8 sm:px-4 border-dark-green border-opacity-10"
        >
          <div className="flex flex-col items-center gap-4">
            <RiQuestionAnswerLine className="text-4xl" />
            <h3>Consultation</h3>
          </div>
          <p>
            From the initial consultation to the final walk-through, our team
            works closely with you to bring your landscaping vision to life. We
            pride ourselves on our attention to detail and commitment to
            customer satisfaction.
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
          className="flex flex-col gap-2 py-8 sm:px-4 sm:border-r border-b border-dark-green border-opacity-10"
        >
          <div className="flex flex-col items-center gap-4">
            <MdOutlineDesignServices className="text-4xl" />
            <h3>Landscape Design</h3>
          </div>
          <p>
            We take the time to listen to your needs and ideas to create a
            custom design that fits your unique style and budget.
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
          className="flex flex-col gap-2 py-8 sm:px-4 border-b border-dark-green border-opacity-10"
        >
          <div className="flex flex-col items-center gap-4">
            <BiWrench className="text-4xl" />
            <h3>Landscape Maintenance</h3>
          </div>
          <p>
            We use only the highest quality materials and the latest techniques
            to ensure that your lawn stays healthy and vibrant for years to
            come.
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
          className="flex flex-col gap-2 py-8 sm:px-4 border-b sm:border-r sm:border-b-0 border-dark-green border-opacity-10"
        >
          <div className="flex flex-col items-center gap-4">
            <MdAutorenew className="text-4xl" />
            <h3>Landscape Renovation</h3>
          </div>
          <p>
            Whether you're looking to spruce up your front yard with some
            colorful flowers or transform your backyard into a lush garden
            oasis, we've got you covered.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 py-8 sm:px-4 border-b sm:border-r sm:border-b-0 border-dark-green border-opacity-10"
        >
          <div className="flex flex-col items-center gap-4">
            <MdOutlineWaterDrop className="text-4xl" />
            <h3>Sprinkler Installation & Maintenance</h3>
          </div>
          <p>
            If you want to keep your plants and lawn healthy, you'll need an
            effective sprinkler system. We can help you install a system and
            provide ongoing maintenance.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 1.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          className="flex flex-col gap-2 pt-8 sm:px-4"
        >
          <div className="flex flex-col items-center gap-4">
            <GiHighGrass className="text-4xl" />
            <h3>Lawn Care</h3>
          </div>
          <p>
            We include services like mowing, fertilizing, aerating, and seeding
            to keep your lawn healthy and looking great.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
