import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");

  return (
    <nav
      className={`bg-wood z-40 w-full fixed top-0 py-4 transition duration-200`}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 sm:w-2/3">
        <h4 className="text-3xl font-bold">LOGO</h4>

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-6 md:gap-16 text-lg font-semibold">
            <Link
              to={"/"}
              onClick={() => {
                setIsMenuToggled(false);
              }}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              onClick={() => {
                setIsMenuToggled(false);
              }}
            >
              About
            </Link>
            <Link
              to={"/portfolio"}
              onClick={() => {
                setIsMenuToggled(false);
              }}
            >
              Portfolio
            </Link>
            <Link
              to={"/contact"}
              onClick={() => {
                setIsMenuToggled(false);
              }}
            >
              Contact
            </Link>
          </div>
        ) : (
          <button
            className="rounded-full bg-wood p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <RxHamburgerMenu />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        <AnimatePresence>
          {!isAboveSmallScreens && isMenuToggled && (
            <motion.div
              key="sidebar"
              className="fixed right-0 bottom-0 h-full bg-wood w-[300px]"
              initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <AiOutlineClose />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 text-3xl ml-[33%] text-steel">
                <Link
                  to={"/"}
                  onClick={() => {
                    setIsMenuToggled(false);
                  }}
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  onClick={() => {
                    setIsMenuToggled(false);
                  }}
                >
                  About
                </Link>
                <Link
                  to={"/portfolio"}
                  onClick={() => {
                    setIsMenuToggled(false);
                  }}
                >
                  Portfolio
                </Link>
                <Link
                  to={"/contact"}
                  onClick={() => {
                    setIsMenuToggled(false);
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
