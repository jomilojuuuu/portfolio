import React from "react";
import works from "../../../data/works.json";

import Work from "../../../components/Work";
import Github from "../../../components/Github";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
function Project() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="h-screen relative flex overflow-hidden flex-col text-left max-w-full mt-5 md:-mt-10 justify-evenly mx-auto items-center z-0">
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-[0]" />
        <div className="lg:flex lg:flex-row z-[1] overflow-y-scroll md:overflow-y-hidden md:overflow-x-hidden">
          <div className="text-center lg:text-left md:mt-30 md:ml-25 ">
            <span className="text-white leading-[30px] md:leading-[50px] text-2xl md:text-4xl">
              <p className="text-gray-400">I love working on fun</p>
              projects
            </span>
            <p className="text-base md:mr-5 md:text-sm leading-[30px] md:leading-[30px] text-white mt-[24px] md:w-[500px] w-[350px]">
              In my leisure time, I enjoy
              <span className="text-gray-400"> experimenting </span>
              with and building things that I find personally
              <span className="text-gray-400"> interesting </span> or
              <span className="text-gray-400"> useful.</span> A few examples of
              these projects can be found on my
              <span className="text-gray-400"> GitHub page,</span> where you can
              also find other
              <span className="text-gray-400"> miscellaneous creations </span>I
              have worked on.
            </p>
            <Github />
          </div>
          <div className="mb-10 lg:mb-0 w-[100%] md:ml-5 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-1 mx-auto overflow-x-hidden md:overflow-y-auto lg:overflow-y-auto md:h-full lg:h-[600px]">
            {works.map((work, i) => (
              <Work key={i} {...work} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Project;

