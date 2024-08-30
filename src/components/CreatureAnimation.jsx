import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CreatureAnimation = () => {
  const [creatureProfile, setCreatureProfile] = useState(
    generateInitialCreature()
  );
  const creatureVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      scale: custom.size,
      x: custom.position.x,
      y: custom.position.y,
      rotate: custom.rotation,
      backgroundColor: custom.color,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  // Function to generate creature traits
  function generateInitialCreature() {
    return {
      size: Math.random() * 2,
      position: { x: Math.random() * 300, y: Math.random() * 300 },
      rotation: Math.random() * 180,
      color: `hsl(${Math.random() * 360}, 100%, 50%)`,
    };
  }

  // Function to evolve creature based on interaction
  function evolveCreature() {
    setCreatureProfile(generateInitialCreature());
  }

  useEffect(() => {
    const interval = setInterval(() => {
      evolveCreature();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        variants={creatureVariants}
        initial="hidden"
        animate="visible"
        custom={creatureProfile}
        onClick={() => evolveCreature()}
        style={{
          width: 100,
          height: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
        }}
      />
    </div>
  );
};

export default CreatureAnimation;
