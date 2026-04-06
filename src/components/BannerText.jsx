import React from "react";
import { motion } from "framer-motion";

function BannerText({ text, className=""}) {
  const letters = Array.from(text);
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.h1
        className={className}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={child}>
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
}

export default BannerText;
