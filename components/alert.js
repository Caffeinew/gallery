import { motion } from "framer-motion";

export default function alert({ text }) {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="fixed top-4 right-0 px-8 py-4 shadow z-10 bg-blue-400 dark:bg-blue-600 text-gray-100 alert"
    >
      {text}
    </motion.div>
  );
}
