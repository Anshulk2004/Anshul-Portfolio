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
    <section ref={containerRef} className="py-6">
     <div className="flex justify-center items-center mb-4">
  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-1 hover:shadow-xl transition-all duration-300 w-54 h-20">
    <h2 className="text-3xl font-bold  text-white tracking-widest uppercase"
    style={{ fontFamily: "'Pacifico', cursive",fontWeight:1000,display:'flex',alignItems:'center' }}
    >
      Projects
    </h2>
    <div className="absolute inset-0 bg-white/20 blur-sm -z-10 rounded-lg shadow-2xl" />
  </div>
</div>

      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 w-full px-2">          
          <motion.div
            id="Projects"
            className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 0.97,
              boxShadow: "0px 10px 30px rgba(255,255,255, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="flex-shrink-0 w-full md:w-56 h-56 md:h-auto bg-cover bg-bottom"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1517736996303-4eec4a66bb17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80)",
              }}
            ></div>
            <div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-xl md:text-2xl">ToneCraft</p>
                <p className="text-gray-700 md:text-lg">
                  Developed an NFT marketplace for audiobooks, integrating emotionally expressive voices using TTS libraries and Blockchain for security. Built a sentiment classifier with 92% accuracy and enhanced audio quality using Amazon Polly with emotional context.
                </p>
              </div>
              <div className="p-4 md:p-5 bg-gray-100">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl">
                      Tech Stack
                    </h3>
                    <p className="mt-2 text-gray-700 md:text-lg">
                      Python, React.js, Next.js
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-3 sm:mt-0">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>          
          <motion.div
            className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 0.97,
              boxShadow: "0px 10px 30px rgba(255,255,255, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="flex-shrink-0 w-full md:w-56 h-56 md:h-auto bg-cover bg-bottom"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRvdXIlMjBndWlkZXxlbnwwfHx8fDE2MzQ5MTQ4Nzc&ixlib=rb-1.2.1&q=80&w=1080)",
              }}
            ></div>
            <div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-xl md:text-2xl">RouteSnap</p>
                <p className="text-gray-700 md:text-lg">
                  Developed Route Snap, a trip planning website with NextAuth authentication and a 3D background using Spline. Implemented trip optimization using Gemini API and machine learning algorithms like Clustering and KNN with Google Maps API.
                </p>
              </div>
              <div className="p-4 md:p-5 bg-gray-100">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl">
                      Tech Stack
                    </h3>
                    <p className="mt-2 text-gray-700 md:text-lg">
                      Python, React.js, Next.js
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-3 sm:mt-0">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>          
          <motion.div
            className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
                scale: 0.97,
                boxShadow: "0px 10px 30px rgba(255,255,255, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="flex-shrink-0 w-full md:w-56 h-56 md:h-auto bg-cover bg-bottom"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGVjb21tZXJjZXxlbnwwfHx8fDE2MzQ5MTUwMzU&ixlib=rb-1.2.1&q=80&w=1080)",
              }}
            ></div>
            <div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-xl md:text-2xl">SQLGen</p>
                <p className="text-gray-700 md:text-lg">
                  Designed SQL generator templates that convert user inputs into SQL queries, leveraging LangChain and HuggingFace Models to improve query accuracy.
                </p>
              </div>
              <div className="p-4 md:p-5 bg-gray-100">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl">
                      Tech Stack
                    </h3>
                    <p className="mt-2 text-gray-700 md:text-lg">
                      Python, React.js, Next.js
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-3 sm:mt-0">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fas fa-globe"></i>
                    </a>
                  </div>
                </div>
                </div>
            </div>
          </motion.div>          
          <motion.div
            className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{
              scale: 0.97,
              boxShadow: "0px 10px 30px rgba(255,255,255, 0.5)",
              transition: { duration: 0.3 },
            }}
          >
            <div
              className="flex-shrink-0 w-full md:w-56 h-56 md:h-auto bg-cover bg-bottom"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fGVjb21tZXJjZXxlbnwwfHx8fDE2MzQ5MTUwMzU&ixlib=rb-1.2.1&q=80&w=1080)",
              }}
            ></div>
            <div>
              <div className="p-4 md:p-5">
                <p className="font-bold text-xl md:text-2xl">Conversational Chatbot</p>
                <p className="text-gray-700 md:text-lg">
                Implemented a chatbot with a Streamlit interface for user interactions, employing Huggingface Transformers to optimize
                NLP tasks and perform sentiment analysis achieving an accuracy of 89%.
                </p>
              </div>
              <div className="p-4 md:p-5 bg-gray-100">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <h3 className="font-semibold text-lg md:text-xl">
                      Tech Stack
                    </h3>
                    <p className="mt-2 text-gray-700 md:text-lg">
                      Python, React.js, Next.js
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-3 sm:mt-0">
                    <a
                      href="https://github.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 text-2xl"
                    >
                      <i className="fas fa-globe"></i>
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
