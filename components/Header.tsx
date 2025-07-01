"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import dynamic from "next/dynamic";
import React from "react";
import Contact from "../components/Contact";

// 👉 Dynamically import Modal
const Modal = dynamic(() => import("./Modal"), { ssr: false });

import type { ModalHandle } from "./Modal";

function Header() {
  const modalRef = React.useRef<ModalHandle | null>(null);

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-inherit">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://github.com/jomilojuuuu"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://twitter.com/jomilojuuuu"
        />
        <SocialIcon
          fgColor="gray"
          bgColor="transparent"
          url="https://www.linkedin.com/in/oke-jomiloju-b3903b279/"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="text-gray-300 cursor-pointer"
      >
        <button
          onClick={() => modalRef.current?.open()}
          className="text-white font-bold text-2xl z-10"
        >
          <SocialIcon
            className="cursor-pointer"
            fgColor="gray"
            bgColor="transparent"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </button>
      </motion.div>

      {/* Dynamically loaded modal */}
      <Modal ref={modalRef}>
        <Contact />
      </Modal>
    </header>
  );
}

export default Header;
