"use client";
import SectionHeading from "@/components/helper/SectionHeading";
import { aboutInfo } from "@/Data/data";
import React from "react";
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="bg-gray-200 dark:bg-[#191D2B] pt-16 pb-16">
      <SectionHeading>About me</SectionHeading>
      <div className="items-center gap-8 grid grid-cols-1 xl:grid-cols-2 lg:grid-col-2 mx-auto mt-20 w-[80%]">
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="mb-5 font-bold text-[26px] text-blue-700 dark:text-bg sm:text-2xl md:text-4xl lg:text-5xl">
            {aboutInfo.title}
          </h1>
          <p className="text-gray-500 dark:text-white text-base">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex flex-col justify-center items-center bg-green-800 w-7 h-7">
                <FaCheck className="text-white" />
              </div>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                Full Stack Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex flex-col justify-center items-center bg-orange-800 w-7 h-7">
                <FaCheck className="text-white" />
              </div>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                Backend Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex flex-col justify-center items-center bg-blue-800 w-7 h-7">
                <FaCheck className="text-white" />
              </div>
              <p className="font-bold text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg">
                Frontend Development
              </p>
            </div>
          </div>
        </div>
        {/*stats content */}
        <div
          data-aos="zoom-in"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
          className="gap-8 md:gap-12 grid grid-cols-2 bg-gray-300 dark:bg-gray-900 px-4 sm:px-8 md:px-12 lg:px-20 py-8"
        >
          {/* Box 1 */}
          <div className="mx-auto p-5 md:p-10 border border-[#4A62D6] rounded-lg w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
            <p className="mt-3 font-bold text-blue-700 dark:text-white text-xl text-center">
              {aboutInfo.experience}
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg text-center">
              Year of Experience
            </p>
          </div>

          {/* Box 2 */}
          <div className="mx-auto p-5 md:p-10 border border-[#4A62D6] rounded-lg w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
            <p className="mt-3 font-bold text-blue-700 dark:text-white text-xl text-center">
              {aboutInfo.Linesofcode}
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg text-center">
              Code lines number
            </p>
          </div>

          {/* Box 3 */}
          <div className="mx-auto p-5 md:p-10 border border-[#4A62D6] rounded-lg w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
            <p className="mt-3 font-bold text-blue-700 dark:text-white text-xl text-center">
              {aboutInfo.project}
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg text-center">
              Completed Projects
            </p>
          </div>

          {/* Box 4 */}
          <div className="mx-auto p-5 md:p-10 border border-[#4A62D6] rounded-lg w-full max-w-[220px] hover:scale-95 transition-transform duration-300">
            <p className="mt-3 font-bold text-blue-700 dark:text-white text-xl text-center">
              {aboutInfo.certificate}
            </p>
            <p className="text-gray-700 dark:text-gray-400 text-base sm:text-lg text-center">
              Completed Certificate
            </p>
          </div>
        </div>
      </div>
      {/* Education and Experinece part  */}
      <div className="relative mt-[10rem] pr-6 md:pr-12 lg:pr-24 xl:pr-32 pl-6">
        {/* Timeline container */}
        <div className="gap-6 grid grid-cols-1 md:grid-cols-[1fr_4fr]">
          {/* Timeline Line */}
          <div className="hidden md:block relative">
            <div
              className="left-1/2 absolute bg-blue-500 w-0.5 h-full"
              data-aos="fade-down"
            ></div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Experience Section */}
            <div>
              <h2
                className="mb-6 font-bold text-blue-700 text-3xl"
                data-aos="fade-right"
              >
                My Experience
              </h2>
              <div className="space-y-6">
                {/* Experience Item 5 */}
                <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    Jr. Full Stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">Ml Bench</p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Aug 2024 - Persent
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Led the full stack development of SnapTrace from scratch,
                      implementing user/admin roles, real-time processing, and
                      optimized checkout logic. This resulted in a 35% increase
                      in order conversions.
                    </li>
                    <li>
                      Redesigned Boodle core modules to improve scalability,
                      reduce crash rates by 60%, and optimize performance for a
                      growing user base.
                    </li>
                    <li>
                      Delivered production-ready features on both platforms.
                      Aligned business requirements with technical
                      implementation to ensure reliability, responsiveness, and
                      a seamless user experience.
                    </li>
                    <li>
                      Refined Mern Stack projects here including Chat
                      application with 100ms latency and ride-booking
                      application handling 500+ daily requests.
                    </li>
                    <li>
                      Integrated blockchain functionalities in a ReactJS
                      project, enabling NFT minting and improving security,
                      resulting in a 20% faster transaction processing time.
                    </li>
                    <li>
                      Re-engineered a ride-booking application with NextJS,
                      boosting page load speed by 40% and improving performance
                      to support 1,000+ active users per day.
                    </li>
                  </ul>
                </div>
                {/* Experience Item 1 */}
                {/* <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Octaloop Technologies
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Sep 2024 - Apr 2025
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Refined 3 Mern Stack projects here including Chat
                      application with 100ms latency and ride-booking
                      application handling 500+ daily requests.
                    </li>
                    <li>
                      Integrated blockchain functionalities in a ReactJS
                      project, enabling NFT minting and improving security,
                      resulting in a 20% faster transaction processing time.
                    </li>
                    <li>
                      Re-engineered a ride-booking application with NextJS,
                      boosting page load speed by 40% and improving performance
                      to support 1,000+ active users per day.
                    </li>
                  </ul>
                </div> */}
                <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    Full Stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Exec9 (Part Time)
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Sep 2025 - Present
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Refining React project here to make it pixel perfect as
                      per the design and making it responsive. Also adding
                      awesome animations to make it more interactive.
                    </li>
                  </ul>
                </div>
                {/* Experience Item 2 */}
                {/* <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    Back-End Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    CodeViks (Part Time - Remote)
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Sep - Dec 2024
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Made efficient backend APIs and services to boost
                      Perfomance by 25% using NodeJS and ExpreessJS.
                    </li>
                    <li>
                      Enhanced backend performance for a business website,
                      decreasing load times and responsiveness by 40% through
                      database optimization and optimized API management.
                    </li>
                    <li>
                      Constructed a well-organized database and API framework to
                      handle hierarchical user progression, referral tracking,
                      and admin-managed task assignments with maximum
                      efficiency.
                    </li>
                    <li>
                      In this company I worked as a backend / node js developer.
                      Worked on a multi-level user expansion platform where
                      every new user has to invite five additional users to go
                      to the subsequent task. Implemented and created backend
                      logic to maintain user logins, task records, and referral
                      tracking on multi-levels. Used effective database
                      structure and tuned performance to provide smooth user
                      growth. Maintained data integrity and security while
                      supporting dynamic user engagement and system scalability.
                    </li>
                  </ul>
                </div> */}
                {/* Experience Item 3 */}
                <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    Software Engineer Intern
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Hazen Tecnologies
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Jul - Aug 2024
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Completed HTML and CSS courses. building 10+ responsive
                      web pages as hands-on projects.
                    </li>
                    <li>
                      Learned Git for version control and collaborative
                      development. managing 50+ commits and collaborating on 3+
                      projects at a time.
                    </li>
                    <li>
                      Worked on a survey application with ReactJS and Firebase,
                      optimized for handling 100+ responses in real time.
                    </li>
                  </ul>
                </div>
                {/* Experience Item 4 */}
                {/* <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    Next.js Associate Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    IFish Tecnologies (Part Time - Hybrid)
                  </p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Apr - Jun 2024
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Successfully developed an Inventory Management System
                      (IMS) for mobile stores to manage inventory, sales, and
                      purchase histories, using Next.js for seamless front-end
                      and back-end integration.
                    </li>
                    <li>
                      Gained valuable mentorship from a senior developer,
                      enhancing my proficiency in Next.js and refining my
                      full-stack development skills.
                    </li>
                    <li>
                      Expanded my expertise in full-stack development, database
                      management, and system optimization through the hands-on
                      experience of this project.
                    </li>
                    <li>
                      Successfully created an Inventory Management System (IMS)
                      for mobile stores to track and manage full inventory,
                      sales, and purchase histories. Deployed front-end and
                      integrated back-end features with Next.js to have smooth
                      data handling. Grateful for the guidance of my senior, who
                      assisted me in learning Next.js and refining my
                      development skills. This project extended my knowledge
                      base in full-stack development, database management, and
                      system optimization.
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2
                className="mb-6 font-bold text-blue-700 text-3xl"
                data-aos="fade-right"
              >
                My Education
              </h2>
              <div className="space-y-6">
                {/* Education Item */}
                <div
                  className="relative flex flex-col gap-2 bg-white dark:bg-gray-800 shadow-lg p-6 border border-gray-200 dark:border-gray-600 rounded-lg"
                  data-aos="fade-up"
                >
                  <h3 className="font-bold text-blue-700 dark:text-white text-xl">
                    BS Computer Science
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">MNSUAM</p>
                  <p className="text-gray-500 dark:text-gray-500">
                    Sep 2020 - Jul 2024
                  </p>
                  <ul className="mt-2 ml-6 text-gray-600 dark:text-gray-400 list-disc">
                    <li>
                      Actively engaged in sports such as cricket and badminton
                      for a healthy and active lifestyle.
                    </li>
                    <li>
                      Contributed as a member of the software engineering
                      community, participating in events and knowledge-sharing
                      initiatives.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
