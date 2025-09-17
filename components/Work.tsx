import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  image: string;
  description: string;
  tools: string[];
  liveUrl?: string;
};

function Work({ name, image, description, tools, liveUrl }: Props) {
  return (
    <div className="w-[350px] md:w-[350px] lg:w-[300px] bg-[#555555] rounded shadow-lg mt-10">
      {/* Image */}
      <div className="relative rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={100}
          className="object-cover rounded-t-lg w-full"
          style={{ pointerEvents: "none" }} // ensures image does not block clicks
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="font-bold text-[18px] mt-1 text-white">{name}</h2>
        <p className="text-gray-300 pt-2 pb-2">{description}</p>
        <p className="mt-1 text-white text-lg">{tools?.join(", ")}</p>

        {/* View Site Link */}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 bg-[#444444] text-gray-300 hover:bg-[#555555] hover:text-white rounded transition-all duration-300"
          >
            View Site
          </a>
        )}
      </div>
    </div>
  );
}

export default Work;
