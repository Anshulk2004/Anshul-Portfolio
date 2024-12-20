"use client";
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
    <footer className="bg-blue-800 text-white pb-0 w-full">
      <div className="flex flex-wrap justify-between px-8 py-6">
        <div className="flex flex-col items-center w-full sm:w-1/2">
          <h2 className="text-3xl font-semibold text-black mb-6">Let's Connect</h2>
          <div className="text-lg space-y-4 text-center">
            <p className="flex items-center justify-center text-lg">
              <FaPhoneAlt className="mr-2" /> +91 9870803265
            </p>
            <p className="flex items-center justify-center text-lg">
              <FaEnvelope className="mr-2" /> anshulk0102@gmail.com
            </p>
            <p className="flex items-center justify-center text-lg">
              <FaMapMarkerAlt className="mr-2" /> Pune, Maharashtra, India
            </p>
          </div>
          
          <div className="flex space-x-6 mt-6">
            <a
              href="https://leetcode.com/u/Anshulk0102/"
              className="text-2xl hover:scale-110 transition-all duration-300"
              style={{ color: '#0077b5' }}
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Anshulk2004"
              className="text-2xl hover:scale-110 transition-all duration-300"
              style={{ color: '#333' }}
            >
              <FaGithub />
            </a>
            <a
              href="https://leetcode.com/u/Anshulk0102/"
              className="text-2xl hover:scale-110 transition-all duration-300"
              style={{ color: '#FFA116' }}
            >
              <SiLeetcode />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col w-full sm:w-1/2 items-center">
          <h2 className="text-3xl font-semibold mb-6 text-black">Leave a message for me</h2>
          <div className="flex w-full max-w-md">
            <input
              type="text"
              placeholder="Write your message"
              className="flex-grow px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-r-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="border-t border-gray-600"></div>
        <div className="text-center py-2">
          <p className="text-sm text-black">&copy; 2024 Anshul Kumar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;