"use client";

import React, { useEffect, useState } from "react";
import { getProjects } from "@/sanity/lib/queries"; // must return { _id, title, imageUrl, liveUrl, ... }
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Github from "../../../components/Github";
import Work from "../../../components/Work";
import VerticalSidebar from "../../../components/VerticalSidebar";

type Project = {
  _id: string;
  title: string;
  description: string;
  tools: string[];
  liveUrl: string;
  imageUrl?: string;
};

function Page() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <Header />
      <VerticalSidebar />
      <div className="min-h-screen flex flex-col md:flex-row px-5 lg:mx-40 gap-5">
        {/* Left section: intro/details */}
        <div className="w-full md:w-[850px] md:mt-40 p-5 md:p-10 max-h-[40vh] md:max-h-none overflow-y-auto flex flex-col justify-start">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            I love working on fun projects
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-6">
            In my leisure time, I enjoy{" "}
            <span className="text-[#555555]">experimenting</span> with and
            building things that I find personally{" "}
            <span className="text-[#555555]">interesting</span> or{" "}
            <span className="text-[#555555]">useful</span>. A few examples of
            these projects can be found on my{" "}
            <span className="text-[#555555]">GitHub page</span>.
          </p>
          <Github />
        </div>

        {/* Right section: scrollable projects (single column) */}
        <div className="w-full md:w-3/5 max-h-fit md:max-h-[80vh] overflow-y-auto flex flex-col gap-5">
          {projects.map((proj) => (
            <Work
              key={proj._id}
              name={proj.title}
              image={proj.imageUrl || "/placeholder.png"}
              description={proj.description}
              tools={proj.tools}
              liveUrl={proj.liveUrl}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
