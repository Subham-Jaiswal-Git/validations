import React from "react";
import { motion } from "framer-motion";

// Gesture animations on button
const Component3 = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg"
      >
        Click Me
      </motion.button>
    </div>
  );
};

export default Component3;
