"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="skills"
      className="skills container py-10 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} 
    >
      
      <motion.div
        variants={fadeInUpVariants}
        className="flex justify-center items-center mb-8"
      >
        <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 rounded-lg shadow-lg transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 w-54 h-20">
          <h2
            className="text-3xl font-bold text-white tracking-widest uppercase text-center"
            style={{ fontFamily: "'Pacifico', cursive", fontWeight: 1000 }}
          >
            SKILLS
          </h2>
          <div className="absolute inset-0 bg-white/20 blur-md -z-10 rounded-lg shadow-2xl" />
        </div>
      </motion.div>

      
      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
        }}
        className="holder-blue grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        
        <motion.div variants={fadeInUpVariants} className="column bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-purple-600">Programming Languages</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>C++</li>
            <li>Python</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUpVariants} className="column bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-pink-600">Tools</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Docker</li>
            <li>Git/GitHub</li>
            <li>Linux</li>
          </ul>
        </motion.div>

        
        <motion.div variants={fadeInUpVariants} className="column bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-blue-600">Frameworks</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Flask</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUpVariants} className="column bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-green-600">Databases</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </motion.div>

        
        <motion.div variants={fadeInUpVariants} className="column bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-yellow-600">Coursework</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Operating Systems</li>
            <li>DBMS</li>
            <li>Computer Networks</li>
            <li>OOPS</li>
            <li>Data Structures and Algorithms</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeInUpVariants} className="column bg-white p-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300">
          <h3 className="text-lg font-bold mb-4 text-red-600">Soft Skills</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
