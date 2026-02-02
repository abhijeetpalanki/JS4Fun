export const fadeIn = (direction) => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.5, delayChildren: 0.7 },
  },
};

export const bottleWrapper = {
  initial: {
    y: -1000,
  },
  animate: {
    y: 0,
    transition: { delay: 2.6, duration: 0.8, type: "spring" },
  },
};

export const bottle = {
  initial: {
    y: 0,
  },
  animate: {
    y: [30, 0, 30],
    transition: {
      duration: 1.6,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export const leafWrapper = {
  initial: {
    y: -800,
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.4,

      type: "spring",
    },
  },
};

export const leaf = {
  initial: {
    x: 0,
  },
  animate: (i) => ({
    x: [20, 0, 20],
    transition: {
      delay: 2,
      duration: 1 * i,
      ease: "linear",
      repeat: Infinity,
    },
  }),
};

export const leavesContainer = {
  initial: {},
  animate: {
    transition: {
      delayChildren: 3,
      staggerChildren: 0.2,
    },
  },
};
