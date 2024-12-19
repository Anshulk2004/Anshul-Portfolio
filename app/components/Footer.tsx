import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      
      <div className="flex flex-wrap justify-between px-8 py-6">        
        <div className="flex flex-col space-y-4 w-full sm:w-1/2">
          <div className="text-lg space-y-2">
          <h2 className="text-3xl font-semibold mt-4">Connect With Me</h2>
            <p className="flex items-center text-lg">
              <FaPhoneAlt className="mr-2" /> +91 9870803265
            </p>
            <p className="flex items-center text-lg">
              <FaEnvelope className="mr-2" /> anshulk0102@gmail.com
            </p>
            <p className="flex items-center text-lg">
              <FaMapMarkerAlt className="mr-2" /> Pune, Maharashtra, India
            </p>
          </div>
          
          <div className="flex space-x-6 mt-4">
            <a
              href="https://leetcode.com/u/Anshulk0102/"
              className="text-2xl hover:text-blue-500 transition-all duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Anshulk2004"
              className="text-2xl hover:text-gray-500 transition-all duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Anshulk0102/"
              className="text-2xl hover:text-yellow-500 transition-all duration-300"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col w-full sm:w-1/2 items-start sm:items-center">
          <h2 className="text-2xl font-semibold mb-4">Leave a message for me</h2>
          <div className="flex w-full sm:w-auto">
            <input
              type="text"
              placeholder="Write your message"
              className="flex-grow px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      
      <div className="border-t border-gray-600 mt-4"></div>      
      <div className="text-center mt-2">
        <p className="text-sm mt-2">&copy; 2024 Anshul Kumar. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
