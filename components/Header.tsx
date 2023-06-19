import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import Modal, { ModalHandle } from "./Modal";
import React from "react";

type Props = {};

function Header({}: Props) {
    const router = useRouter();
    const modalRef = React.useRef<ModalHandle>(null);
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center bg-inherit">
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
                <button onClick={() => router.push("/contact")}>
                    <SocialIcon className="cursor-pointer" fgColor="gray" bgColor="transparent" network="email" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </button>
                <button onClick={() => modalRef.current?.open()} className="text-white font-bold text-2xl z-10">
                    Open Modal
                </button>
            </motion.div>
            <Modal ref={modalRef} className="max-w-md">
                <h1>Hello World</h1>
            </Modal>
        </header>
    );
}

export default Header;
