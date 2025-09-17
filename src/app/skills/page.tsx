"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Card from "../../../components/Card";
import { getSkills } from "@/sanity/lib/queries";
import VerticalSidebar from "../../../components/VerticalSidebar";
import Resume from "../../../components/Resume";
import { urlFor } from "@/sanity/lib/image"; // 👈 import urlFor

type Skill = {
  name: string;
  image: import("@sanity/image-url/lib/types/types").SanityImageSource; // use SanityImageSource type
};

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        setSkills(data); // no manual mapping needed
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }

    fetchSkills();
  }, []);

  return (
    <div>
      <Header />
      <VerticalSidebar />
      <motion.div className="flex flex-col h-screen text-center lg:text-left lg:-mt-40 lg:flex-row px-5 justify-evenly items-center -mt-15">
        <div className="space-y-5 lg:space-y-8 py-20 lg:px-10 md:w-[60%] lg:w-64 lg:h-95 xl:w-[600px] xl:h-[400px] -mt-[20px] lg:-mt-25">
          <h4 className="text-3xl lg:text-5xl font-semibold text-gray-400 lg:mt-20 lg:w-[90%]">
            I work mostly with
            <span className="text-[#555555]"> Frontend Technologies</span>
          </h4>
          <p className="text-lg lg:text-xl text-gray-400">
            Here are some of the <span className="text-[#555555]">tools</span>{" "}
            I’ve worked with over the years, for my{" "}
            <span className="text-[#555555]">personal, professional</span> and{" "}
            <span className="text-[#555555]">open source</span> projects. My{" "}
            <span>soft skills</span> have also contributed majorly to my{" "}
            <span className="text-[#555555]">growth</span>
            and abilities <span className="text-[#555555]">professionally</span>
            .
          </p>
          <Resume />
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="-mt-[120px] grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2 lg:gap-5 py-20 lg:mt-[5px]"
        >
          {skills.map((skill, i) => {
            if (skill.image) {
              try {
                // imageUrl is not used, so just validate image processing
                urlFor(skill.image).width(100).height(100).url();
              } catch (e) {
                console.warn(
                  "Could not build image URL for skill:",
                  skill.name,
                  e
                );
              }
            }

            return (
              <Card
                key={i}
                name={skill.name}
                image={
                  skill.image
                    ? urlFor(skill.image).width(30).height(30).url()
                    : "/placeholder.png"
                }
              />
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
