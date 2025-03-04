import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Exit Animation
const MyComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={() => setIsVisible((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Box
      </button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-4 p-4 bg-gray-200 rounded-lg shadow-lg"
          >
            <p>Animated Box</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MyComponent;
