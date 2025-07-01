import React from "react";
import { SocialIcon } from "react-social-icons";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  description: string;
  tools: string;
};

function Work({ name, image, description, tools }: Props) {
  return (
    <div className="w-[300px] bg-black rounded shadow-lg h-[370px] mx-auto mt-5">
      <div>
        <Image
          alt="profile pic"
          src={image}
          className="relative mx-auto mt-2 w-40 h-40"
          width={"40"}
          height={"40"}
        />
      </div>

      <div className="p-5">
        <h2 className="font-[500] text-[18px] leading-[22.97px] mt-[12px] text-white ">
          {name}
        </h2>
        <p className="text-gray text-[14px] leading-[20.42px] text-gray-500 pt-2 pb-2">
          {description}
        </p>
        <p className="mt-[1px] text-white ">{tools}</p>
        <div className="mt-[4px] flex gap-[30px]">
          <span className="text-white flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75  hover:scale-110 transition-all duration-500">
            <SocialIcon
              fgColor="gray"
              bgColor="transparent"
              url="https://github.com/jomilojuuuu"
            />
            <a className="text-gray-500" href="">
              Code
            </a>
          </span>
          <span className="text-white flex justify-center items-center cursor-pointer gap-[8px] text-black2 text-[14px] hover:opacity-75  hover:scale-110 transition-all duration-500">
            <a className="text-gray-500" href="">
              View Site
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Work;
