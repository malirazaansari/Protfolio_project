'use client'
import SectionHeading from '@/components/helper/SectionHeading'
import { projectData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Project = () => {
  const [isClient, setIsClient] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setScreenWidth(window.innerWidth); // Set screen width on mount
  }, []);

  return (
   
    <div className="pt-16 pb-16 dark:bg-[#191D2B] bg-gray-200">
  <SectionHeading>My Projects</SectionHeading>
  <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center ">
    {projectData.map((project, i) => {
      return (
        <div
        key={i}
        data-aos={isClient && screenWidth >= 768 ? 'fade-up' : null} // Apply animation only for screens >= 768px
        data-aos-anchor-placement="top-center"
        data-aos-delay={`${i * 50}`}
        data-aos-duration="800"
          className="dark:bg-[#262d42] bg-gray-300 p-6 rounded-lg hover:scale-105 transition-transform duration-300"
        >
          {/* Project Image */}
          <Link href={project.url} target="_blank">
            <Image
              src={project.image}
              alt="project"
              width={300}
              height={200}
              className="w-full rounded-md"
            />
          </Link>

          {/* Project Title */}
          <h3 className="mt-4 text-lg font-bold text-gray-700 dark:text-white">
            {project.title}
          </h3>

          {/* Skills Section */}
          <div className="mt-2 flex flex-wrap gap-2">
          {project.skills.map((skill, index) => (
  <span
    key={index}
    className="text-xs font-medium bg-blue-500 text-white py-1 px-2 rounded-full dark:bg-blue-600"
  >
    {skill}
  </span>
))}
          </div>
        </div>
      );
    })}
  </div>
</div>

  )
}

export default Project