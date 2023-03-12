import { motion } from "framer-motion";

const Content = () => {
  return (
    <section className="w-5/6 md:w-2/3 py-24 md:py-48 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img1.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img2.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img3.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      {/* <div
        className={`bg-[url('./assets/img4.jpg')] h-[300px] bg-cover bg-center`}
      ></div> */}
      {/* <div
        className={`bg-[url('./assets/img5.jpg')] h-[300px] bg-cover bg-center`}
      ></div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img6.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      {/* <div
        className={`bg-[url('./assets/img7.jpg')] h-[300px] bg-cover bg-center`}
      ></div> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img8.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img9.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img10.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img11.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img12.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        variants={{
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        }}
        className={`bg-[url('./assets/img13.jpg')] h-[300px] bg-cover bg-center`}
      ></motion.div>
    </section>
  );
};

export default Content;
