import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
};

function Card({ name, image }: Props) {
  return (
    <div className="w-[100px] h-[60px] md:w-[200px] md:h-[80px] mt-3 bg-[#1e1e1e] flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
      <span className="flex gap-[16px] w-[101px] ">
        <span className="w-[35px] h-[35px]">
          <Image
            alt="profile pic"
            src={image}
            className="relative mx-auto mt-2"
            width={"20"}
            height={"20"}
          />
        </span>
        <p className="flex justify-center items-center text-[10px] md:text-[14px] text-white leading-[19px]">
          {name}
        </p>
      </span>
    </div>
  );
}

export default Card;
