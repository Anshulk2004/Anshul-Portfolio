"use client";
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="skills"
      className="skills container py-10 px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        variants={fadeInUpVariants}
        className="flex justify-center items-center mb-8"
      >
        <div className="title-container">
          <h2 className="title">Skills</h2>
        </div>
      </motion.div>

      <motion.div
        variants={fadeInUpVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-white text-lg font-semibold">💻</span>
            <h3 className="text-white text-lg font-semibold">
              Programming Languages
            </h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🔧</span>
              <span className="text-gray-300 text-lg">C/C++</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🐍</span>
              <span className="text-gray-300 text-lg">Python</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🌐</span>
              <span className="text-gray-300 text-lg">JavaScript</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">☕</span>
              <span className="text-gray-300 text-lg">Java</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">🤖</span>
            <h3 className="text-white text-lg font-semibold">
              Machine Learning
            </h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🗣️</span>
              <span className="text-gray-300 text-lg">NLP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🧮</span>
              <span className="text-gray-300 text-lg">TensorFlow</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🔥</span>
              <span className="text-gray-300 text-lg">PyTorch</span>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">&lt;/&gt;</span>
            <h3 className="text-white text-lg font-semibold">
              Frontend Development
            </h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span>
              <span className="text-gray-300 text-lg">HTML, CSS, GSAP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">⚛️</span>
              <span className="text-gray-300 text-lg">React.JS, Next.JS, Node.JS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📝</span>
              <span className="text-gray-300 text-lg">TypeScript</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">📱</span>
            <h3 className="text-white text-lg font-semibold">
              App Development
            </h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🛠️</span>
              <span className="text-gray-300 text-lg">Flutter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📜</span>
              <span className="text-gray-300 text-lg">Kotlin</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🧩</span>
              <span className="text-gray-300 text-lg">Jetpack Compose</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">🗄️</span>
            <h3 className="text-white text-lg font-semibold">Databases</h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🐬</span>
              <span className="text-gray-300 text-lg">MySQL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🐘</span>
              <span className="text-gray-300 text-lg">PostgreSQL</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📦</span>
              <span className="text-gray-300 text-lg">MongoDB</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">🛠️</span>
            <h3 className="text-white text-lg font-semibold">Tools</h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🔗</span>
              <span className="text-gray-300 text-lg">GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🐳</span>
              <span className="text-gray-300 text-lg">Docker</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📱</span>
              <span className="text-gray-300 text-lg">Android Studios</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">🧠</span>
            <h3 className="text-white text-lg font-semibold">
              Problem Solving
            </h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📚</span>
              <span className="text-gray-300 text-lg">Data Structures</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">⚡</span>
              <span className="text-gray-300 text-lg">Algorithms</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">📊</span>
              <span className="text-gray-300 text-lg">Statistics</span>
            </div>
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">📘</span>
            <h3 className="text-white text-lg font-semibold">Coursework</h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">💻</span>
              <span className="text-gray-300 text-lg">Operating Systems</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🌐</span>
              <span className="text-gray-300 text-lg">Computer Networks</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🔑</span>
              <span className="text-gray-300 text-lg">Object-Oriented Programming</span>
            </div>            
          </div>
        </div>

        <div className="bg-neutral-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-lg font-semibold">🔮</span>
            <h3 className="text-white text-lg font-semibold">Others</h3>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">⌨️</span>
              <span className="text-gray-300 text-lg">Data Analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">🌐</span>
              <span className="text-gray-300 text-lg">WEB 3</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
