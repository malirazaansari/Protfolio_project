'use client'
import SectionHeading from '@/components/helper/SectionHeading'
import { skillsData } from '@/Data/data'
import SkillsCard from './SkillsCard'
import React, { useEffect, useState } from 'react'
const Skills = () => {
 const [isClient, setIsClient] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setScreenWidth(window.innerWidth); // Set screen width on mount
  }, []);
  return (
    <div className='pt-16 pb-16 dark:bg-[#191D2B] bg-gray-200'>
        <SectionHeading>My Skills</SectionHeading>
        <div className="mt-20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        lg:grid-col-4 xl:grid-cols-5 gap-4 items-center">
            {skillsData.map((skill,i)=>{
                return(
                    <div 
                    data-aos={isClient && screenWidth >= 768 ? 'flip-left' : null}
                    data-aos-anchor-placement ="top-center" 
                    data-aos-delay={`${i * 50}`}
                    key={skill.id} className="">
                        <SkillsCard skill={skill}></SkillsCard>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Skills