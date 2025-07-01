"use client"
import React from "react";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Card from "../../../components/Card";
import skills from "../../../data/skills.json";

function Skills() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <motion.div
        className="flex flex-col relative h-screen text-center md:text-left md:-mt-32 md:flex-row max-w-7xl px-5 justify-evenly mx-auto items-center -mt-20"
      >
        <div className="space-y-5 md:space-y-8 py-20 px-0 md:px-10 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[400px] -mt-[150px] md:-mt-11">
          <h4 className="text-2xl md:text-3xl -mt-9 font-semibold text-gray-400">
            I work mostly with
            <span className="text-white"> Frontend Technologies</span>
          </h4>
          <p className="text-sm md:text-xl text-gray-400">
            Here are some of the <span className="text-white">tools</span> i’ve
            worked with over the years, for my{" "}
            <span className="text-white">personal, professional</span> and{" "}
            <span className="text-white">open source</span> projects.
          </p>
          <div className="hidden md:block">
            <Navigation />
          </div>
        </div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          viewport={{ once: true }}
          className="-mt-52 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 py-20 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[400px] md:-mt-52"
        >
          {skills.map((skill, i) => (
            <Card key={i} {...skill} />
          ))}
        </motion.div>
      </motion.div>
      <div className="md:hidden flex justify-center">
        <Navigation />
      </div>
    </div>
  );
}

export default Skills;
