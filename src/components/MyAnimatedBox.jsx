import { motion } from "framer-motion";
import { useState } from "react";
const MyAnimatedBox = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      initial={{ x: 0 }}
      animate={{ x: isClicked ? 100 : 0 }} // Move if clicked
      transition={{ duration: 1 }}
      style={{ width: "100px", height: "100px", background: "blue" }}
      onClick={() => setIsClicked(!isClicked)} // Toggle click state
    >
      Click Me
    </motion.div>
  );
};
export default MyAnimatedBox;
