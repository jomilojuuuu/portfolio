import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="rounded-full border border-[#333333] h-[190px] md:h-[200px] w-[190px] md:w-[200px] absolute mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] h-[190px] md:h-[300px] w-[190px] md:w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] h-[190px] md:h-[500px] w-[190px] md:w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#F7AB0A] h-[190px] md:h-[650px] w-[190px] md:w-[650px] absolute mt-52 animate-pulse" />
      <div className="rounded-full border border-[#333333] h-[190px] md:h-[800px] w-[190px] md:w-[800px] absolute mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
