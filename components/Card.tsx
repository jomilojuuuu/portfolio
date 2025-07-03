import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Props = {
  name: string;
  image?: string;
};

function Card({ name, image }: Props) {
  return (
    <div className="w-[160px] h-[70px] md:w-[200px] md:h-[80px] mt-3 bg-gray-400 flex justify-center items-center hover:scale-95 shadow-md transition-all duration-300">
      <span className="flex gap-[16px] w-[101px]">
        {image ? (
          <span className="w-[35px] h-[35px] relative">
            <Image
              alt={`${name} logo`}
              src={urlFor(image).url()}
              className="mx-auto mt-2"
              width={30}
              height={30}
            />
          </span>
        ) : null}
        <p className="flex justify-center items-center text-[18px] md:text-[19px] text-white leading-[19px]">
          {name}
        </p>
      </span>
    </div>
  );
}

export default Card;
