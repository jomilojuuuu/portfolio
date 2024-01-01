<<<<<<< HEAD
import React, { useState } from "react";

function Navigation() {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <div className="flex gap-10 items-center">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">ABOUT</p>
            </div>

            <div className="flex gap-10 items-center mt-4">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">SKILLS</p>
            </div>

            <div className="flex gap-10 items-center mt-4">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">PROJECT</p>
            </div>

            <div className="flex gap-10 items-center mt-4">
                <div className={`cursor-pointer bg-gray-300 h-[2px] ${isClicked ? "w-20" : "w-24"}`} onClick={handleClick} />
                <p className="text-gray-500 text-sm">CONTACTS</p>
=======
import Link from "next/link";
import React from "react";

type Props = {};

function Navigation({}: Props) {
    return (
        <div>
            <div className="mt-[28px] flex">
                <a href="https://github.com/preshpi" className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold">
                    <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-[6px] translate-x-[6px] transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
                    <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white text-resume"></span>
                    <span className="text-white text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">View Github</span>
                </a>
            </div>
            <div className="mt-[70px]">
                <ul className="grid w-[200px] items-center space-y-4">
                    <li>
                        <Link className="flex items-center space-x-8" href="/">
                            <div className="h-[2px] w-16 bg-blue-200" />
                            <button className="text-white cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">HOME</button>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center space-x-8" href="/about">
                            <div className="h-[2px] w-16 bg-blue-200" />
                            <button className="text-white cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">ABOUT</button>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center space-x-8" href="/skills">
                            <div className="h-[2px] w-16 bg-blue-200" />
                            <button className="text-white cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">SKILLS</button>
                        </Link>
                    </li>
                    <li>
                        <Link className="flex items-center space-x-8" href="/projects">
                            <div className="h-[2px] w-16 bg-blue-200" />
                            <button className="text-white cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">PROJECTS</button>
                        </Link>
                    </li>
                    <li>
                        {/* <Link className="flex items-center space-x-8" href="/contact">
                <div className="h-[2px] w-16 bg-blue-200" />
                <button className="text-white cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">CONTACT</button>
              </Link> */}
                    </li>
                </ul>
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
            </div>
        </div>
    );
}

export default Navigation;
<<<<<<< HEAD

// <div className="bg-gray-300 w-24 h-[2px]" />
=======
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
