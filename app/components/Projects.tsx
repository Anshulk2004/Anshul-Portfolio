"use client";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Projects = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="w-full py-16"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg, #4a90e2, #8e44ad)",
            padding: "0.5rem 1.5rem",
            borderRadius: "8px",
            color: "white",
            fontSize: "1.5 rem",
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 700,
            letterSpacing: "1px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          PROJECTS
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="h-40">
                <img
                  src="/Images/first.jpg"
                  alt="ToneCraft"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  ToneCraft
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  Developed an NFT marketplace for audiobooks, integrating
                  emotionally expressive voices using TTS libraries and
                  Blockchain for security. Built a sentiment classifier with 92%
                  accuracy.
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="text-md font-semibold text-gray-700 mb-1">
                    Tech Stack
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Python, Deep Learning, AWS Services, Fast API, Flask, Solidity, IPFS, Node.js, ReactJs
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/Anshulk2004/ToneCraft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                      href="https://tone-craft-frontend.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="h-40">
                <img
                  src="/Images/second.jpg"
                  alt="RouteSnap"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  RouteSnap
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  Developed Route Snap, a trip planning website with NextAuth
                  authentication and a 3D background using Spline. Implemented
                  trip optimization using Gemini API and machine learning
                  algorithms.
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="text-md font-semibold text-gray-700 mb-1">
                    Tech Stack
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                  Python, Next.js, TypeScript, Machine Learning, OpenAI, Tailwind CSS
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/Anshulk2004/Travel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="h-40">
                <img
                  src="/Images/third.jpg"
                  alt="SQLGen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">SQLGen</h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  Designed SQL generator templates that convert user inputs into
                  SQL queries, leveraging LangChain and HuggingFace Models to
                  improve query accuracy.
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="text-md font-semibold text-gray-700 mb-1">
                    Tech Stack
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                  Python, ReactJs, NodeJs, Gemini, LangChain, Streamlit
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Anshulk2004/sqlGen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex flex-col h-full">
              <div className="h-40">
                <img
                  src="/Images/fourth.jpg"
                  alt="Chatbot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Conversational Chatbot
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow">
                  Implemented a chatbot with a Streamlit interface for user
                  interactions, employing Huggingface Transformers to optimize
                  NLP tasks and perform sentiment analysis achieving 89%
                  accuracy.
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="text-md font-semibold text-gray-700 mb-1">
                    Tech Stack
                  </h4>
                  <p className="text-gray-600 text-sm mb-2">
                    Python, Tensorflow, HuggingFace Transformers
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/Anshulk2004/llm_bot"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fab fa-github text-xl"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <i className="fas fa-globe text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
