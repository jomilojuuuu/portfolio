import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function about({}: Props) {
  return (
    <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 py-16 justify-evenly mx-auto items-center'>
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
        className='-mb-20 md:mb-0 flex-shrink-0 w-40 h-40 mt-10 rounded-full object-cover md:w-[280px] md:rounded-lg md:h-[250px] xl:w-[600px] xl:h-[400px]'
      />
      
      <div className='space-y-10 pt-10 md:pt-1 pb-0 md:px-10'>
        <h4 className='text-4xl mt-5 font-semibold'>
            Quick Bio
        </h4>
        <p className='text-xl md:text-2xl text-gray-400'>
          I am a <span className='text-gray-100'>frontend developer</span> I have a strong background in creating visually appealing and 
          <span className='text-gray-100'> user-friendly web experiences. </span> 
          I am motivated to find a role where I can challenge myself <span className='text-gray-100'>and provide value to website users. </span>
          I am excited to bring my knowledge and experience to a team and contribute to a company&apos;s success.
        </p>
       <div className=''>
            <a href="/assets/resume-73c297ea.pdf" target="_blank" download="resume" className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold">
                <span className=" border border-white p-3 text-[16px] text-center font-normal leading-[24px] relative">View Resumé</span>
            </a>
        </div>

      <div className=''>
        <div className='w-[200px] h-1 bg-white m-2 inline'/><p className='inline'>book</p>
        <div className='w-[200px] h-1 bg-white m-2 inline'/><p className='inline'>book</p>
        <div className='w-[200px] h-1 bg-white m-2 inline'/><p className='inline'>book</p>
      </div>
      </div>
    </motion.div>
  )
}

export default about

