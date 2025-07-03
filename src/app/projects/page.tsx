"use client";
import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Github from "../../../components/Github";
import works from "../../../data/works.json";
import Work from "../../../components/Work";
import VerticalSidebar from "../../../components/VerticalSidebar";

function page() {
  return (
    <div className="">
      <Header />
      <VerticalSidebar />
      <div className="my-10 h-screen relative overflow-y-hidden">
        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 z-[0]" />
        <div className="lg:flex lg:justify-center ">
          <div className="mx-10 flex flex-col lg:my-20 items-center lg:block text-center lg:text-left">
            <span className="flex w-60 md:w-[350px]  text-xl md:text-4xl text-white leading-[22px] md:leading-[45px] ">
              <p className="text-gray-400">I love working on fun projects</p>
            </span>
            <p className="text-[13px] md:text-lg lg:mt-10 lg:text-[18px] leading-[20px] md:leading-[30px] lg:leading-[28px] text-gray-400 my-10 lg:my-10 md:w-[520px]">
              In my leisure time, I enjoy
              <span className="text-[#555555]"> experimenting </span>
              with and building things that I find personally
              <span className="text-[#555555]"> interesting </span> or
              <span className="text-[#555555]"> useful.</span> A few examples of
              these projects can be found on my
              <span className="text-[#555555]"> GitHub page,</span> where you can
              also find other
              <span className="text-[#555555]"> miscellaneous creations </span>I
              have worked on.
            </p>
            <Github />
          </div>
          <div className="h-[470px] md:grid md:grid-cols-2 lg:grid-cols-1 lg:gap-3 lg:pr-5 lg:overflow-y-visible lg:overflow-x-hidden">
            {works.map((work, i) => (
              <Work key={i} {...work} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default page;
