'use client'
import React from 'react'
import { BaseInfo } from '../../../Data/data'
import { FaDownload } from 'react-icons/fa'
import Image from 'next/image'
import { FaJsSquare, FaCode, FaReact, FaNodeJs } from "react-icons/fa"; 
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Software Engineer',
        'MERN Stack Developer',
        'Web Developer',
        'Full Stack Developer',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className='relative bg-gray-200 dark:bg-[#191D2B] pt-[20vh] pb-20 w-full h-full overflow-hidden'>
        <div className="flex flex-col justify-center mx-auto w-4/5 h-full">
        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2">
            <div className='order-2 lg:order-1'>
                <h1 data-aos="fade-left" className='mb-2 font-semibold text-blue-700 dark:text-gray-300 text-2xl md:text-3xl lg-text-4xl'>
                    Hi,I am {BaseInfo.name}
                </h1>
                <h1 data-aos="fade-right" data-aos-delay="100" className='font-bold text-gray-700 dark:text-bg text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem]'>
                    <span ref={typedRef}></span>
                 </h1>
                 <p data-aos="fade-right" data-aos-delay="200" className='mt-3 text-gray-700 dark:text-white text-sm md:text-base text-opacity-60'>
                    {BaseInfo.description}
                 </p>
                 <a 
                  href={BaseInfo.myCv} 
                  download="AliRaza's_CV.pdf" 
                  data-aos="zoom-in" 
                  data-aos-delay="300" 
                  className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-900 mt-8 px-4 py-2 rounded-lg font-semibold text-white text-sm md:text-lg transition-all duration-200"
>
  <span>Download CV</span>
  <FaDownload />
</a>
            </div>
           <div className="relative flex justify-center items-center order-1 lg:order-2 h-[400px]">
      {/* Profile Picture */}
      <div className="z-10 relative border-[3.5px] border-blue-400 rounded-full w-[200px] h-[200px] overflow-hidden hover:scale-110 transition-transform duration-300">
        <Image
          src={BaseInfo.profilePic}
          alt={BaseInfo.name}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>

      {/* Rotating Circle */}
      <div className="absolute flex justify-center items-center border-[2px] border-blue-400 rounded-full w-[300px] h-[300px] animate-spin-slow">
        {/* Icon 1 (Top) */}
        <div className="top-0 left-[50%] absolute flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12 hover:scale-125 transition-all -translate-x-1/2 -translate-y-[50%] hover:animate-none duration-300 cursor-pointer transform">
          <FaJsSquare className="text-blue-500 text-xl" />
        </div>
        {/* Icon 2 (Right) */}
        <div className="top-[50%] right-0 absolute flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12 hover:scale-125 transition-all -translate-y-1/2 translate-x-[50%] hover:animate-none duration-300 cursor-pointer transform">
          <FaReact className="text-blue-500 text-xl" />
        </div>
        {/* Icon 3 (Bottom) */}
        <div className="bottom-0 left-[50%] absolute flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12 hover:scale-125 transition-all -translate-x-1/2 translate-y-[50%] hover:animate-none duration-300 cursor-pointer transform">
          <FaNodeJs className="text-blue-500 text-xl" />
        </div>
        {/* Icon 4 (Left) */}
        <div className="top-[50%] left-0 absolute flex justify-center items-center bg-white shadow-md rounded-full w-12 h-12 hover:scale-125 transition-all -translate-x-[50%] -translate-y-1/2 hover:animate-none duration-300 cursor-pointer transform">
          <FaCode className="text-blue-500 text-xl" />
        </div>
      </div>
    </div>
      

        </div>
        </div>
    </div>
  )
}

export default Hero