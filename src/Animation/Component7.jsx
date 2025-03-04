import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// EXit animation
const Component7 = ({ image }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Image</button>
      <AnimatePresence>
        {isVisible && (
          <motion.img
            key={image.src} // Ensure animation works properly
            src={image.src}
            alt="Animated"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            style={{ width: "200px", height: "auto" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Component7;
