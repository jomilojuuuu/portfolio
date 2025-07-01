import Image from "next/image";
import React from "react";

function ProjectCard() {
  return (
    <div className="overflow-y-auto  h-[590px] scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-gray-400">
      <div className="bg-[#181918] shadow-2xl w-[350px] ">
        <div className="">
          <Image
            src="/reddit-image.PNG"
            width={700}
            height={700}
            alt="Picture of the author"
            className=" w-[350px] h-[200px]"
          />
        </div>
        <div className="mt-3 ml-3 text-white">
          <h1 className="twe text-xl font-semibold">Spotify-clone</h1>
          <p className="twe text-sm">play and groove to different songs</p>
          <h1 className="twe text-lg mt-2">NextJs + Tailwind + TypeScript</h1>
        </div>
      </div>

      <div className="bg-[#181918] shadow-2xl w-[350px] mt-5">
        <div className="">
          <Image
            src="/reddit-image.PNG"
            width={700}
            height={700}
            alt="Picture of the author"
            className=" w-[350px] h-[200px]"
          />
        </div>
        <div className="mt-3 ml-3 text-white">
          <h1 className="twe text-xl font-semibold">Spotify-clone</h1>
          <p className="twe text-sm">play and groove to different songs</p>
          <h1 className="twe text-lg mt-2">NextJs + Tailwind + TypeScript</h1>
        </div>
      </div>

      <div className="bg-[#181918] shadow-2xl w-[350px] mt-5">
        <div className="">
          <Image
            src="/reddit-image.PNG"
            width={700}
            height={700}
            alt="Picture of the author"
            className=" w-[350px] h-[200px]"
          />
        </div>
        <div className="mt-3 ml-3 text-white">
          <h1 className="twe text-xl font-semibold">Spotify-clone</h1>
          <p className="twe text-sm">play and groove to different songs</p>
          <h1 className="twe text-lg mt-2">NextJs + Tailwind + TypeScript</h1>
        </div>
      </div>

      <div className="bg-[#181918] shadow-2xl w-[350px] mt-5">
        <div className="">
          <Image
            src="/reddit-image.PNG"
            width={700}
            height={700}
            alt="Picture of the author"
            className=" w-[350px] h-[200px]"
          />
        </div>
        <div className="mt-3 ml-3 text-white">
          <h1 className="twe text-xl font-semibold">Spotify-clone</h1>
          <p className="twe text-sm">play and groove to different songs</p>
          <h1 className="twe text-lg mt-2">NextJs + Tailwind + TypeScript</h1>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
