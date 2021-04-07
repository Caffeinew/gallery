export const sliderBottom = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transiton: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};
export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
