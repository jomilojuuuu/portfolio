"use client";

import { motion } from "framer-motion";
import Header from "../../../components/Header";

export default function About() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10"
      >
        {/* Profile Image */}
        <motion.img
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src="/banner.png"
          alt="Profile picture"
          className="w-48 h-48 md:w-72 md:h-72 xl:w-[400px] xl:h-[400px] object-cover rounded-full md:rounded-lg shadow-lg"
        />

        
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-[#FACC15]">Me</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a passionate{" "}
            <span className="text-white font-semibold">frontend developer</span>{" "}
            with a love for crafting beautiful, responsive websites and
            intuitive user interfaces. I thrive in environments where I can
            grow, learn, and contribute to real-world projects that solve
            meaningful problems.
          </p>

          <p className="text-lg text-gray-400 leading-relaxed">
            With a solid foundation in modern frontend technologies and a focus
            on usability and performance, I aim to deliver exceptional digital
            experiences that resonate with users.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
