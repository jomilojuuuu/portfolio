import React from "react";
import works from "../../../data/works.json";
import Header from "../../../components/Header";
import Navigation from "../../../components/Navigation";
import Work from "../../../components/Work";
function Project() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full md:-mt-10 justify-evenly mx-auto items-center z-0">
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-[0]" />
        <div className="lg:flex lg:flex-row z-[1] overflow-y-scroll md:overflow-y-hidden">
          <div className="text-center lg:text-left grid items-center ">
            <span className="text-white font-[700] leading-[30px] md:leading-[50px] text-[24px] md:text-[50px]">
              <p className="text-gray-400">
                I love working on <br /> fun
              </p>
              projects
            </span>
            <p className="text-[17px] md:text-[23px] leading-[30px] md:leading-[30px] text-white  word-break mt-[24px] md:w-[700px] w-[350px] whitespace-no-wrap">
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
            <div className="hidden md:block">
              <Navigation />
            </div>
          </div>
          <div className="w-[80%] mx-auto overflow-x-hidden lg:overflow-y-auto lg:h-[600px] pr-8">
            {works.map((work, i) => (
              <Work key={i} {...work} />
            ))}
          </div>
          <div className="md:hidden flex justify-center">
            <Navigation />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
