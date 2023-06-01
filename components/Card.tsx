import React from 'react'
import Image from 'next/image'

type Props = {
  name: string;
  image: string;
}
    
function Card({name, image}: Props) {
  return (
    <div className="w-[163px] h-[77px] mt-3 bg-[#1e1e1e] flex justify-center items-center  hover:scale-95 shadow-md transition-all duration-300">
      <span className="flex gap-[16px] w-[101px] justify-evenly">
        <span className="w-[35px] h-[35px]">
          <Image
            alt="profile pic"
            src={image}
            className='relative rounded-full  mx-auto'
            width={"20"} height={"20"}
          />
        </span>
          <p className="flex justify-center items-center text-[14px] text-white leading-[19px]">{name}</p>
      </span>
    </div>
  )
}
    
export default Card