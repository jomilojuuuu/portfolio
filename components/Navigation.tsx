import Link from 'next/link'
import React from 'react'

type Props = {}

function Navigation({}: Props) {
  return (
    <div className="mt-[70px]">
        <div>
          <ul className="grid w-[200px] items-center space-y-4">
            <li>
              <Link className="flex items-center space-x-8" href="/about">
                <div className="h-[2px] w-16 bg-blue-200" />
                <button className="cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">ABOUT</button>
              </Link>
            </li>
            <li>
              <Link className="flex items-center space-x-8" href="/skills">
                <div className="h-[2px] w-16 bg-blue-200" />
                <button className="cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">SKILLS</button>
              </Link>
            </li>
            <li>
              <Link className="flex items-center space-x-8" href="/project">
                <div className="h-[2px] w-16 bg-blue-200" />
                <button className="cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">PROJECTS</button>
              </Link>
            </li>
            <li>
              <Link className="flex items-center space-x-8" href="/contact">
                <div className="h-[2px] w-16 bg-blue-200" />
                <button className="cursor-pointer lg:text-[16px] lg:leading-[20.42px] font-[700] mx-3 uppercase">CONTACT</button>
              </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navigation
