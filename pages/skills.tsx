<<<<<<< HEAD
import React from 'react'
import Card from '@/components/Card'
import { motion } from 'framer-motion'
import skills from "@/data/skills.json"

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-gray-5oo '>
            Skills
        </h3>
          
        <div className='space-y-5 md:space-y-10 py-20 px-0 md:px-10 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[400px] -mt-11'>
            <h4 className='text-2xl md:text-4xl -mt-9 font-semibold text-gray-400'>
                I work mostly with
                <span className='text-white'> Frontend Technologies</span>
            </h4>
            <p className='text-sm md:text-2xl text-gray-400'>
                Here are some of the <span className='text-white'>tools</span> i’ve worked with over the years, for my <span className='text-white'>personal, professional</span> and <span className='text-white'>open source</span> projects.
            </p>
        </div>
        <motion.div
        initial={{
            x: 200,
            opacity: 0
        }}  
        transition={{
            duration: 1.2
        }}
        whileInView={{
            x: 0,
            opacity: 1
        }}
        viewport={{ once: true }}
        className='grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 py-20 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[400px] -mt-52'>
              {skills.map((skill, i)=>(<Card key={i} {...skill} />))}
        </motion.div> 
    </motion.div>
  )
}

export default Skills
=======
import React from "react";
import Card from "@components/Card";
import { motion } from "framer-motion";
import skills from "@/data/skills.json";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

type Props = {};

function Skills({}: Props) {
    return (
        <div>
            <div>
                <Header />
            </div>
            <motion.div
                className="flex flex-col relative h-screen text-center md:text-left md:-mt-32 
                 md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center -mt-20"
            >
                <div className="space-y-5 md:space-y-8 py-20 px-0 md:px-10 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[400px] -mt-[150px] md:-mt-11">
                    <h4 className="text-2xl md:text-3xl -mt-9 font-semibold text-gray-400">
                        I work mostly with
                        <span className="text-white"> Frontend Technologies</span>
                    </h4>
                    <p className="text-sm md:text-xl text-gray-400">
                        Here are some of the <span className="text-white">tools</span> i’ve worked with over the years, for my <span className="text-white">personal, professional</span> and{" "}
                        <span className="text-white">open source</span> projects.
                    </p>
                    <div className="">
                        <Navigation />
                    </div>
                </div>
                <motion.div
                    initial={{
                        x: 200,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.2
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{ once: true }}
                    className="-mt-52 grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-5 py-20 w-56 h-56 md:w-64 md:h-95 xl:w-[600px] xl:h-[400px] md:-mt-52"
                >
                    {skills.map((skill, i) => (
                        <Card key={i} {...skill} />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Skills;
>>>>>>> b28984dbae57012e2f2e03a3463dfe8439fcb926
