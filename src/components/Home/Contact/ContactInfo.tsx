'use client'
import { contactData } from '@/Data/data';
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation, FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin, FaWhatsapp, FaInstagram} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      {/* Phone Section */}
      <div className="flex items-center space-x-8">
        <div
          className="flex flex-col justify-center items-center bg-[#4A62D6] rounded-full w-10 md:w-16 h-10 md:h-16"
        >
          <FaPhone className="w-4 md:w-7 h-4 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-gray-700 dark:text-white text-lg md:text-xl">Phone</h1>
          <h1 className="text-gray-700 dark:text-white text-base md:text-lg text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div
          className="flex flex-col justify-center items-center bg-[#4A62D6] rounded-full w-10 md:w-16 h-10 md:h-16"
        >
          <FaEnvelope className="w-4 md:w-7 h-4 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-gray-700 dark:text-white text-lg md:text-xl">Email</h1>
          <h1 className="text-gray-700 dark:text-white text-base md:text-lg text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center space-x-8">
        <div
          className="flex flex-col justify-center items-center bg-[#4A62D6] rounded-full w-10 md:w-16 h-10 md:h-16"
        >
          <FaMapLocation className="w-4 md:w-7 h-4 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="font-bold text-gray-700 dark:text-white text-lg md:text-xl">Address</h1>
          <h1 className="text-gray-700 dark:text-white text-base md:text-lg text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex justify-center items-center space-x-14 mt-[6rem] p-5">
        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-10 h-10 text-blue-700 hover:scale-110 transition-transform" />
        </a>
        <a href={contactData.twitter} target="_blank" rel="noopener noreferrer">
          <FaXTwitter className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform" />
        </a>
        <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform" />
        </a>
        <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="rounded w-10 h-10 text-blue-600 hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
