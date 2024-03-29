import Card from "@/components/Card";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

type Props = {};

function Project({}: Props) {
    return (
        <div className="h-screen relative md:flex gap-12 px-40 pt-10">
            <div className=" h-screen w-[700px]">
                <h1 className="text-gray-300 text-lg md:text-5xl text-">
                    I love working on <span className="text-white">fun projects</span>
                </h1>
                <p className="text-gray-300 lg mt-10 text-lg">
                    <span className="text-white">In my leisure time, I enjoy</span> experimenting <span className="text-white">with and building things that I find personally</span> interesting or
                    useful. <span className="text-white">A few examples of these projects can be found on my</span> GitHub page, <span className="text-white">where you can also find other</span>{" "}
                    miscellaneous creations <span className="text-white">I have worked on.</span>
                </p>
                <div className="mt-10">
                    <a href="https://github.com/jomilojuuuu" className=" px-4 py-3 bg-white hover:bg-gray-200 font-semibold">
                        View Github
                    </a>
                </div>
                <div className="mt-20 hidden md:inline-flex">
                    <Navigation />
                </div>
            </div>
            <div className="w-[570px]">
                <ProjectCard />
            </div>
        </div>
    );
}

export default Project;
