"use client";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import dynamic from "next/dynamic";
import { AlignRight } from "lucide-react";
import React from "react";
import Contact from "../components/Contact";
import { X } from "lucide-react";

// 👉 Dynamically import Modal
const Modal = dynamic(() => import("./Modal"), { ssr: false });

import type { ModalHandle } from "./Modal";
import Link from "next/link";

function Header() {
  const modalRef = React.useRef<ModalHandle | null>(null);

  const [isOpen, setIsOpen] = React.useState(false);

  const handelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" mb-2 top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-inherit">
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
        <div className="flex items-center space-x-2">
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
            <p className="uppercase hidden lg:inline-flex text-sm text-gray-400">
              Get In Touch
            </p>
          </button>
          <div>
            <AlignRight onClick={handelClick} className="lg:hidden text-gray-500" />
            {isOpen && (
              <div className="fixed top-0 right-0 h-full w-[300px] bg-gray-500 text-white z-50 shadow-lg p-6">
                <button onClick={handelClick} className="self-end mt-5">
                  <X className="h-7 w-7 text-gray-400" />
                </button>
                <div className="flex flex-col text-3xl items-center mt-30">
                  <Link
                    href="/"
                    className="block mb-2 text-gray-300 hover:text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="block mb-2 text-gray-300 hover:text-white my-10"
                  >
                    About
                  </Link>
                  <Link
                    href="/skills"
                    className="block mb-2 text-gray-300 hover:text-white my-10"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/projects"
                    className="block mb-2 text-gray-300 hover:text-white my-10"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="block mb-2 text-gray-300 hover:text-white my-10"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Dynamically loaded modal */}
      <Modal ref={modalRef}>
        <Contact />
      </Modal>
    </header>
  );
}

export default Header;
