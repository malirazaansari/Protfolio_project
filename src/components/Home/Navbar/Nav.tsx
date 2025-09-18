"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import ThemeToggle from "./ThemeToggle";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // adding navlinks
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed ${
        navBg ? "dark:bg-[#131622] bg-gray-200" : "bg-transparent"
      } h-[12vh] z-[10] w-full transition-all duration-200`}
    >
      <div className="flex justify-between items-center mx-auto w-[95%] sm:w-[90%] xl:w-[80%] h-full">
        {/* Logo */}
        <h1 className="font-bold text-gray-600 dark:text-white sm:text-2xl text-3xl md:text-3xl lg:text-4xl text-center">
          Ali Raza
        </h1>

        <div className="flex items-center space-x-10">
          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {["about", "projects", "customer", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`nav__link dark:text-white text-gray-600 ${
                  activeLink === section ? "text-orange-500" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>

          {/* Theme Toggle */}
          <div>
            <ThemeToggle />
          </div>

          {/* Hire Me Button and Menu Icon */}
          <div className="flex items-center space-x-4">
            <HiBars3BottomRight
              onClick={openNav}
              className="lg:hidden w-8 h-8 text-gray-700 dark:text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
