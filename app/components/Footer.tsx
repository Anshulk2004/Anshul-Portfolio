import React from "react";
import { FaLinkedin, FaDiscord, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-8 w-full">
      
      <div className="flex justify-center items-center mb-6 space-x-8">
        <a
          href="https://www.linkedin.com/in/your-profile-link" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-red-500 transition-all duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="tel:+1234567890" 
          className="text-3xl hover:text-green-500 transition-all duration-300"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="mailto:your-email@example.com" 
          className="text-3xl hover:text-red-500 transition-all duration-300"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://discord.com/users/your-discord-id" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:text-green-500 transition-all duration-300"
        >
          <FaDiscord />
        </a>
      </div>

      
      <div className="flex justify-center mb-6">
        <div className="flex flex-col items-center">
          <h3 className="text-lg mb-2">Leave a message for me</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Write your message"
              className="px-4 py-2 rounded-l-md border-none focus:outline-none text-black"
            />
            <button className="bg-blue-600 text-white py-2 px-4 rounded-r-md hover:bg-blue-700 transition-all duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>

      
      <div className="text-center mt-8">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
