'use client'
import Image from 'next/image';
import React from 'react'


type Props ={
    skill:{
    id: number;
    title: string;
    image: string;
    percent: string;

}
}
const SkillsCard = ({skill}:Props) => {
    const {title,image,percent} =skill
  return (
    <div
  className='p-6 border border-blue-700 hover:border-blue-500 dark:hover:bg-blue-900 hover:bg-gray-400  duration-300 transition-all cursor-pointer text-center rounded-lg 
  dark:bg-gray-900 dark:border-blue-700'
>
  <Image 
    src={image}
    alt={title}
    width={80}
    height={80}
    className='object-cover mx-auto'
  />
  <h1 className='text-[18px] mt-4 dark:text-white text-gray-700 font-[600] '>{title}</h1>
  <div className="dark:bg-black bg-blue-700 mt-4 rounded-lg p-2 text-white  dark:opacity-40">{percent}</div>
</div>

  )
}

export default SkillsCard