"use client";

import { motion } from "framer-motion";
import Header from "../../../components/Header";
import VerticalSidebar from "../../../components/VerticalSidebar";

export default function About() {
  return (
    <div className="min-h-screen bg-[#D3D3D3] text-[#3B3C36]">
      <Header />
      <VerticalSidebar />
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="max-w-6xl mx-auto px-6 py- flex flex-col md:flex-row items-center gap-10"
      >
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
          <h2 className="text-4xl font-bold text-[##555555]">
            About <span className="text-gray-400 ">Me</span>
          </h2>

          <p className="text-lg text-[#555555] leading-relaxed">
            I’m a passionate{" "}
            <span className="text-gray-400  font-semibold">
              frontend developer
            </span>{" "}
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
