import React from "react";
import { motion } from "motion/react";

function MainCTA() {
  return (
    <motion.button
      whileHover={{ scale: 0.8 }}
      whileTap={{ scale: 0.95 }}
      className="hidden sm:block p-8 absolute bottom-0 right-0 w-md bg-red-600 z-10 text-white font-semibold hover:bg-amber-700 transition-colors"
    >
      Contact Me
    </motion.button>
  );
}

export default MainCTA;
