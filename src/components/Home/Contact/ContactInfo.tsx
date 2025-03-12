'use client'
import { contactData } from '@/Data/data';
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaMapLocation } from 'react-icons/fa6';
import { FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram} from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div>
      {/* Phone Section */}
      <div className="flex items-center space-x-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#4A62D6]
          flex items-center justify-center flex-col"
        >
          <FaPhone className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg md:text-xl dark:text-white text-gray-700 font-bold">Phone</h1>
          <h1 className="text-base md:text-lg dark:text-white text-gray-700 text-opacity-70">
            {contactData.phone}
          </h1>
        </div>
      </div>

      {/* Email Section */}
      <div className="flex items-center space-x-8 mt-8 mb-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#4A62D6]
          flex items-center justify-center flex-col"
        >
          <FaEnvelope className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg md:text-xl dark:text-white text-gray-700 font-bold">Email</h1>
          <h1 className="text-base md:text-lg dark:text-white text-gray-700 text-opacity-70">
            {contactData.email}
          </h1>
        </div>
      </div>

      {/* Address Section */}
      <div className="flex items-center space-x-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-[#4A62D6]
          flex items-center justify-center flex-col"
        >
          <FaMapLocation className="w-4 h-4 md:w-7 md:h-7 text-white" />
        </div>
        <div>
          <h1 className="text-lg md:text-xl dark:text-white text-gray-700 font-bold">Address</h1>
          <h1 className="text-base md:text-lg dark:text-white text-gray-700 text-opacity-70">
            {contactData.address}
          </h1>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-[6rem] flex items-center justify-center space-x-14  p-5 ">
        <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="w-10 h-10 text-blue-700 hover:scale-110 transition-transform" />
        </a>
        <a href={contactData.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform" />
        </a>
        <a href={contactData.whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform" />
        </a>
        <a href={contactData.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="w-10 h-10  rounded text-blue-600 hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
