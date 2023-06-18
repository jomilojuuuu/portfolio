import Work from '@/components/Work'
import React from 'react'
import works from "@/data/works.json"
import Navigation from '@/components/Navigation'

type Props = {}

function Project({}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        projects
      </h3>
      <div className='flex flex-row'>
        <div className='text-center lg:text-left grid items-center justify-center place-items-center'>
          <span className='text-white font-[700] leading-[30px] md:leading-[50px] text-[24px] md:text-[35px]'>
            <p className='text-gray-400'>I love working on <br /> fun</p>
            projects
          </span>
          <p className="text-[14px] md:text-[20px] leading-[24px] md:leading-[35px] text-white  word-break mt-[24px] md:w-[550px] w-[350px] whitespace-no-wrap">
            In my leisure time, I enjoy
            <span className="text-gray-400"> experimenting </span>
            with and building things that I find personally
            <span className="text-gray-400"> interesting </span> or
            <span className="text-gray-400"> useful.</span> A few examples of these projects can be found on my
            <span className="text-gray-400"> GitHub page,</span> where you can also find other
            <span className="text-gray-400"> miscellaneous creations </span>
            I have worked on.
          </p>
          <div className="mt-[28px] flex items-center justify-center">
            <a href="https://github.com/preshpi" className="relative w-[160px] h-[48px] group text-center  px-6 py-3 font-bold">
              <span className="absolute inset-0 w-[160px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-[6px] translate-x-[6px] transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
              <span className="absolute inset-0 w-[160px] h-[48px] bg-darkgrey dark:bg-white text-resume"></span>
              <span className="text-resume dark:text-darkgrey text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">View Github</span></a></div>
          <Navigation />
        </div>
        <div className='w-[80%] mx-auto lg:overflow-auto lg:h-[600px]'>
          {works.map((work, i)=>(<Work key={i} {...work} />))}
        </div>
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </div>
  )
}

export default Project




