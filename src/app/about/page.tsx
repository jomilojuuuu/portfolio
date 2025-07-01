"use client";

import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";

export default function About() {
  return (
    <div>
      <Header />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 py-16 justify-evenly mx-auto items-center"
      >
        <motion.img
          initial={{ y: -200, opacity: 0 }}
          whileInView={{ x: 0, y: -70, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src="/banner.png"
          alt="profile pic"
          className="-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 mt-10 rounded-full object-cover md:w-[280px] md:rounded-lg md:h-[250px] xl:w-[600px] xl:h-[400px]"
        />

        <div className="space-y-10 pt-10 md:pt-1 pb-0 md:px-10">
          <p className="text-xl md:text-2xl text-gray-400">
            I am a <span className="text-gray-100">frontend developer</span>. I
            have a strong background in creating visually appealing&nbsp;
            <span className="text-gray-100">
              user‑friendly web experiences.
            </span>{" "}
            I’m motivated to find a role where I can challenge myself&nbsp;
            <span className="text-gray-100">and provide value to users.</span>
          </p>

          <div className="flex justify-center md:block">
            <Navigation />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
