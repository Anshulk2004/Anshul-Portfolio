"use client"
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const WorkExperience: React.FC = () => {
  return (
    <section className="work-experience container">
      <div className="flex justify-center items-center mb-4">
  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-1 hover:shadow-xl transition-all duration-300 w-54 h-20">
    <h2 className="text-3xl font-bold  text-white tracking-widest uppercase"
    style={{ fontFamily: "'Pacifico', cursive",fontWeight:1000 }}
    >
      Work Experience
    </h2>
    <div className="absolute inset-0 bg-white/20 blur-sm -z-10 rounded-lg shadow-2xl" />
  </div>
</div>
      <div className="jobs">
        <motion.div
          className="motion-div"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="role">Data Analyst Intern</div>
          <figure className="image-container">
            <Image
              src="/Images/Ozibook.jpg"
              alt="Ozibook"
              width={200}
              height={150}
              className="centered-image"
            />
            <figcaption>Ozibook</figcaption>
          </figure>
          <div className="date">2024 May - 2024 July</div>
          <ul>
            <li>
              Led web scraping projects on LinkedIn to identify new leads as lead generation tasks.
            </li>
            <li>
              Created Excel Dashboards to visualize team progress as well as
              managed a team of interns.
            </li>
          </ul>
          <div className="icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="motion-div"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="role">FullStack Developer Intern</div>
          <figure className="image-container">
            <Image
              src="/Images/Ozibook.jpg"
              alt="Oddminds Innovation"
              width={200}
              height={150}
              className="centered-image"
            />
            <figcaption>Oddminds Innovation</figcaption>
          </figure>
          <div className="date">2024 August - 2024 October</div>
          <ul>
            <li>
              Enhanced backend functionalities by integrating Firebase Storage,
              Emulator, and Node.js, improving system efficiency and scalability.
            </li>
            <li>
              Developed frontend features using Next.js as well as other frontend
              libraries for various components.
            </li>
          </ul>
          <div className="icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;