import { motion } from "framer-motion";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { MdLocationPin } from "react-icons/md";

const Content = () => {
  return (
    <div className="text-dark-green py-24 md:py-48 w-5/6 md:w-2/3 mx-auto text-center flex flex-col gap-8">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        }}
        className="text-2xl mx:text-4xl"
      >
        Ready to upgrade your outdoor space?
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        We are located in Oceanside, New York and service houses and clients in
        Long Island in the 5 Towns Area:
      </motion.p>
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <li className="flex gap-1 items-center">
          <MdLocationPin />
          Woodmere
        </li>
        <li className="flex gap-1 items-center">
          <MdLocationPin />
          Cedarhurst
        </li>
        <li className="flex gap-1 items-center">
          <MdLocationPin />
          Hewlett
        </li>
        <li className="flex gap-1 items-center">
          <MdLocationPin />
          Oceanside
        </li>
        <li className="flex gap-1 items-center">
          <MdLocationPin />
          Valley Stream
        </li>
      </motion.ul>

      <div className="flex flex-col justify-center items-center gap-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center gap-2"
        >
          <BsFillTelephoneFill />
          <span>(516) 949-1482</span>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex items-center gap-2"
        >
          <FiMail />
          <span>jg4341751@gmail.com</span>
        </motion.div>
      </div>
      <div className="w-full">
        <iframe
          width="100%"
          height="600"
          frameBorder="0"
          loading="lazy"
          title="G & J Landscaping"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Oceanside,%20New%20York+(My%20Business%20Name)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html">
            area maps
          </a>
        </iframe>
      </div>
    </div>
  );
};

export default Content;
