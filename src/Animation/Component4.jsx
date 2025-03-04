import React from "react";
import { motion } from "framer-motion";

// Draggable Box
const Component4 = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.div
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        className="w-32 h-32 bg-blue-500 rounded-lg flex justify-center items-center shadow-lg cursor-grab"
      >
        Drag Me
      </motion.div>
    </div>
  );
};

export default Component4;
