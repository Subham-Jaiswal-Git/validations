import { motion, useScroll } from "framer-motion";
// scroll linked animation 
const Component6 = () => {
  const { scrollYProgress } = useScroll();

  return (
    <svg width="100" height="100" viewBox="0 0 50 50">
      <motion.path
        d="M 10, 25 a 15,15 0 1,0 30,0 a 15,15 0 1,0 -30,0"
        fill="none"
        stroke="black"
        strokeWidth="2"
        style={{ pathLength: scrollYProgress }}
      />
    </svg>
  );
};

export default Component6;
