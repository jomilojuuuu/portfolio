import React from 'react'
import Link from 'next/link';

function Resume() {
  return (
    <div>
      <Link
        href="https://github.com/jomilojuuuu"
        className="relative w-[160px] h-[48px] group text-center px-6 py-3 font-bold"
      >
        <span className="absolute inset-0 w-[150px] h-[48px] border-2 border-darkgrey dark:border-white translate-y-[6px] translate-x-[6px] transition duration-300 ease-out transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
        <span className="absolute inset-0 w-[150px] h-[48px] bg-black"></span>
        <span className="text-white text-[16px] text-center font-normal leading-[24px] relative group-hover:opacity-85">
          View Resume
        </span>
      </Link>
    </div>
  );
}

export default Resume