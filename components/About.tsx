import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
            About
        </h3>
        
        <motion.img
        initial={{
            x:-200,
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
        src="/banner.png"
        alt="profile pic"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[600px] xl:h-[400px]'
      />
      
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>
            Quick Bio
        </h4>
        
              <p className='text-2xl text-gray-400
        '>
            I am a <span className='text-gray-100'>frontend developer</span> I have a strong background in creating visually appealing and 
            <span className='text-gray-100'> user-friendly web experiences. </span> 
            I am motivated to find a role where I can challenge myself <span className='text-gray-100'>and provide value to website users. </span>
             I am excited to bring my knowledge and experience to a team and contribute to a company's success.
        </p>
      </div>
    </motion.div>
  )
}

export default About

