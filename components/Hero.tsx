"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  const [text] = useTypewriter({
    words: ["<Hi, The Name's Jomiloju/>", "<And I Love To Code/>"],
    loop: true,
    delaySpeed: 500,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        src="/avatar1.png"
        alt="profile pic"
        className="relative rounded-full w-[130px] h-[150px] md:w-[150px] md:h-[150px]"
        width={"150"}
        height={"150"}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[#3B3C36] p-2 tracking-[15px]">
          Frontend Developer
        </h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <span className="mr-3 text-xl md:text-2xl text-[#3B3C36]">
            {text}
          </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-7 grid gap-5 md:flex md:justify-between">
          <Link href="/about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="/skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="/projects ">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="/contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
      <motion.div
        initial={{
          y: 200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{  
          y: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="bottom-4 snap-end snap"
      >
        <h2 className="text-sm mt-5 md:text-xl text-[#3B3C36]">
          welcome to my page
        </h2>
      </motion.div>
    </div>
  );
}

export default Hero;
