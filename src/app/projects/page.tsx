import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Github from "../../../components/Github";
import works from "../../../data/works.json";
import Work from "../../../components/Work";

function page() {
  return (
    <div className="">
      <div className="w-fit">
        <Header />
        <div className="my-10 ">
          <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-[0]" />
          <div className="lg:flex lg:justify-center ">
            <div className="mx-10 flex flex-col lg:my-20 items-center lg:block   text-center lg:text-left">
              <span className="flex w-60 md:w-[350px]  text-xl md:text-4xl text-white leading-[22px] md:leading-[45px] ">
                <p className="text-gray-400">I love working on fun projects</p>
              </span>

              <p className="text-[13px] md:text-lg lg:mt-10 lg:text-[14px] leading-[20px] md:leading-[30px] lg:leading-[20px] text-white my-4 md:w-[520px]">
                In my leisure time, I enjoy
                <span className="text-gray-400"> experimenting </span>
                with and building things that I find personally
                <span className="text-gray-400"> interesting </span> or
                <span className="text-gray-400"> useful.</span> A few examples
                of these projects can be found on my
                <span className="text-gray-400"> GitHub page,</span> where you
                can also find other
                <span className="text-gray-400"> miscellaneous creations </span>
                I have worked on.
              </p>
              <Github />
            </div>
            <div className="h-[410px] md:grid md:grid-cols-2 lg:grid-cols-1 lg:gap-3 lg:pr-5 lg:overflow-y-visible lg:overflow-x-hidden">
              {works.map((work, i) => (
                <Work key={i} {...work} />
              ))}
            </div>
          </div>
        </div>
        <div className="text-white text-center lg:hidden">
          <hr className="bg-gray-600" />
          <p className="text-xl">
            &copy; {new Date().getFullYear()} Jomiloju.
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
