import { useState } from "react";
import { motion } from "framer-motion";
// 
// toggle menu 

// 
const Component2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen((prev) => !prev)} 
        className="p-2 bg-blue-500 text-white rounded m-4"
      >
        Toggle Menu
      </button>

      {/* Sidebar */}
      <motion.nav
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        variants={variants}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-4 shadow-lg"
      >
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 p-2 bg-red-500 rounded"
        >
          Close
        </button>

        {/* Menu Items */}
        <ul className="space-y-4 mt-8">
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Home</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">About</li>
          <li className="p-2 hover:bg-gray-700 cursor-pointer">Contact</li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Component2;
