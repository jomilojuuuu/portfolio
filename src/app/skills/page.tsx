"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../../../components/Header";
import Card from "../../../components/Card";
import { getSkills } from "@/sanity/lib/queries";
import Github from "../../../components/Github";

type Skill = {
  name: string;
  image: string;
};

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const data = await getSkills();
        // Map image property to string if it's an object
        const mappedSkills = data.map((skill: { name: string; image: string | { url?: string } }) => ({
          name: skill.name,
          image: typeof skill.image === "string" ? skill.image : skill.image?.url || "",
        }));
        setSkills(mappedSkills);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    }

    fetchSkills();
  }, []);

  return (
    <div>
      <Header />
      <motion.div className="flex flex-col h-screen text-center lg:text-left lg:-mt-40 lg:flex-row px-5 justify-evenly items-center -mt-15">
        <div className="space-y-5 lg:space-y-8 py-20 lg:px-10 md:w-[60%] lg:w-64 lg:h-95 xl:w-[600px] xl:h-[400px] -mt-[50px] lg:-mt-11">
          <h4 className="text-3xl lg:text-5xl font-semibold text-gray-400 lg:mt-20 lg:w-[90%]">
            I work mostly with
            <span className="text-white"> Frontend Technologies</span>
          </h4>
          <p className="text-lg lg:text-xl text-gray-400">
            Here are some of the <span className="text-white">tools</span> I’ve
            worked with over the years, for my{" "}
            <span className="text-white">personal, professional</span> and{" "}
            <span className="text-white">open source</span> projects.My{" "}
            <span>soft skills</span> have also contributed majorly to my{" "}
            <span className="text-white">growth</span>
            and abilities <span className="text-white">professionally</span>.
          </p>
          <Github />
        </div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="-mt-[230px] grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-2 lg:gap-5 py-20 lg:mt-[5px]"
        >
          {skills.map((skill, i) => (
            <Card key={i} name={skill.name} image={skill.image} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
