// App.js
import React from "react";
import { motion } from "framer-motion";

const RotateBox = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#282c34",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "#61dafb",
          borderRadius: "50%",
        }}
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default RotateBox;
