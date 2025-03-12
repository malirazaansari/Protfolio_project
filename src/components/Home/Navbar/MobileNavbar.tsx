'use client'
import { Navlinks } from '@/constant/constant';
import React from 'react';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNavbar = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? 'translate-x-0' : 'hidden';

  const handleLinkClick = (url: string) => {
    closeNav(); // Close the navbar
    const sectionId = url.startsWith('#') ? url.slice(1) : ''; // Get section ID
    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div>
      {/* Background Overlay */}
      <div
        className={`fixed inset-0 z-[1000] bg-black opacity-70 w-full h-screen ${showNav ? '' : 'hidden'}`}
        onClick={closeNav}
      ></div>

      {/* Mobile Navigation */}
      <div
        className={`text-white ${navOpen} fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] dark:bg-[#191D2B] bg-gray-200
        space-y-6 z-[10000]`}
      >
        {Navlinks.map((navlink) => (
          <button
            key={navlink.id}
            className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 dark:text-white text-gray-700 sm:text-[30px]"
            onClick={() => handleLinkClick(navlink.url)}
          >
            {navlink.label}
          </button>
        ))}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 dark:text-white text-gray-700"
        />
      </div>
    </div>
  );
};

export default MobileNavbar;
