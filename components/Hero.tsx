"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  const [text] = useTypewriter({
    words: ["<Hi, The Name's Jomiloju/>", "<And I Loves To Code/>"],
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
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Frontend Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 text-xl md:text-2xl">{text}</span>
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
        className="absolute bottom-4"
      >
        <h2 className="text-sm md:text-xl">welcome to my page</h2>
      </motion.div>
    </div>
  );
}

export default Hero;
