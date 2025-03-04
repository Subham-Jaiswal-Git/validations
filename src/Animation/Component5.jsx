import { motion, useMotionValue, useTransform } from "framer-motion";
// Motion Values
const Icon = ({ x }) => (
  <motion.div 
    style={{ 
      width: 50, 
      height: 50, 
      background: "white", 
      borderRadius: "50%" 
    }}
  />
);

const Component5 = () => {
  const x = useMotionValue(0);
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
  );

  return (
    <motion.div 
      style={{ 
        background, 
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        style={{ x }}
      >
        <Icon x={x} />
      </motion.div>
    </motion.div>
  );
};

export default Component5;
