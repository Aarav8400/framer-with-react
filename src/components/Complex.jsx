// App.js
import React from "react";
import { motion } from "framer-motion";

const circleVariants = {
  initial: { scale: 0.8, opacity: 0.5 },
  animate: { scale: 1.5, rotate: 360, opacity: 1 },
};

const Complex = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#282c34",
        flexDirection: "column",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "#61dafb",
          borderRadius: "50%",
        }}
        variants={circleVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, yoyo: Infinity }}
      />
      <motion.div
        style={{
          width: 50,
          height: 50,
          background: "#ff6347",
          borderRadius: "50%",
          marginTop: 20,
        }}
        whileHover={{ scale: 2, rotate: -360 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Complex;
