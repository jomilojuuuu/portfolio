<<<<<<< HEAD
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
=======
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import Modal, { ModalHandle } from "./Modal";
import React from "react";
import Contact from "@/pages/contact";
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926

type Props = {};

function Header({}: Props) {
<<<<<<< HEAD
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
=======
    const router = useRouter();
    const modalRef = React.useRef<ModalHandle>(null);
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-inherit">
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://github.com/jomilojuuuu" />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://twitter.com/jomilojuuuu" />
                <SocialIcon fgColor="gray" bgColor="transparent" url="https://www.linkedin.com/in/oke-jomiloju-b3903b279/" />
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}
                className="text-gray-300 cursor-pointer"
            >
<<<<<<< HEAD
                <SocialIcon className="cursor-pointer" fgColor="gray" bgColor="transparent" network="email" />
                <Link href="/contact">
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </Link>
            </motion.div>
=======
                <button
                    onClick={() => {
                        modalRef.current?.open();
                    }}
                    className="text-white font-bold text-2xl z-10"
                >
                    <SocialIcon className="cursor-pointer" fgColor="gray" bgColor="transparent" network="email" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </button>
            </motion.div>
            <Modal ref={modalRef} className="">
                <Contact />
            </Modal>
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
        </header>
    );
}

export default Header;
