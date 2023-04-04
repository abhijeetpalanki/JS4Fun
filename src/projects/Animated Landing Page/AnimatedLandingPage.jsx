import { juice, leaf01, leaf02, leaf03, leaf04, leaf05 } from "./images";
import Leaf from "./Leaf";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerContainer,
  bottleWrapper,
  bottle,
  leavesContainer,
} from "./variants";

const AnimatedLandingPage = () => {
  return (
    <div className="h-screen font-serif text-gray-900 bg-gray-100">
      {/* HEADER */}
      <motion.nav
        initial="initial"
        animate="animate"
        variants={fadeIn("down")}
        className="h-[10vh] flex items-center px-10 py-4 md:px-20 text-lg justify-between"
      >
        <span className="font-black md:text-2xl">CLEAN JUICE</span>
        <ul className="justify-center flex-1 hidden space-x-5 md:flex">
          <li>SHOP</li>
          <li>STORY</li>
          <li>MENU</li>
          <li>CONTACT</li>
          <li>ALL JUICES</li>
        </ul>

        <span className="hidden font-medium md:block">My Account</span>
        <span className="block md:hidden">🤕</span>
      </motion.nav>
      <main className="relative h-[90vh]">
        {/* Text Container */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="flex flex-col h-full px-2 py-28 md:px-52"
        >
          <div className="flex items-center justify-between text-lg md:text-2xl">
            <motion.span variants={fadeIn("up")} className="text-green-600">
              Find your clean juice
            </motion.span>
            <motion.span
              variants={fadeIn("up")}
              className="first-letter:text-5xl"
            >
              2 /4
            </motion.span>
          </div>

          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn("up")}
            className="grid flex-1 place-items-center"
          >
            <span className="text-5xl font-black tracking-wider md:text-9xl">
              ORANGE
            </span>
          </motion.div>

          <div className="flex items-center justify-between">
            <motion.button
              variants={fadeIn("up")}
              className="p-2 text-base tracking-wide text-white lowercase bg-gray-900 rounded-lg md:px-6 md:py-3 md:text-lg"
            >
              show all the juices
            </motion.button>
            <motion.p
              variants={fadeIn("up")}
              className="text-sm font-semibold md:text-2xl"
            >
              Your healthy <span className="text-green-600">life</span> <br />{" "}
              starts here with us!
            </motion.p>
          </div>
        </motion.div>

        {/* Bottle Container */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={bottleWrapper}
          className="absolute top-0 left-0 grid w-full text-center place-items-center"
        >
          <motion.img
            variants={bottle}
            src={juice}
            alt="juice"
            className="h-[400px] w-[250px] md:h-[550px] md:w-[500px] object-contain"
          />
        </motion.div>
      </main>

      <motion.div
        initial="initial"
        animate="animate"
        variants={leavesContainer}
      >
        <Leaf
          animationSpeed={1.8}
          className="absolute top-52 left-[30%]"
          imageUrl={leaf01}
        />
        <Leaf
          animationSpeed={1.6}
          className="absolute top-1/2 right-72"
          imageUrl={leaf02}
        />
        <Leaf
          animationSpeed={1.5}
          className="absolute top-10 right-[40%]"
          imageUrl={leaf03}
        />
        <Leaf
          animationSpeed={1.7}
          className="absolute top-[36%] right-1/3"
          imageUrl={leaf04}
        />
        <Leaf
          animationSpeed={1.9}
          className="absolute top-[75%] left-1/4"
          imageUrl={leaf05}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedLandingPage;
