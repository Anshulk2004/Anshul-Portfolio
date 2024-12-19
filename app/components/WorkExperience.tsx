"use client";
import React from "react";
import { motion } from "framer-motion";

const WorkExperience: React.FC = () => {
  return (
    <section className="work-experience">
      <div className="experience-container">
        <div className="title-container">
          <h2 className="title">
            Work Experience
          </h2>
        </div>  
        <div className="jobs">
          <motion.div
            className="job-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="content">
              <div className="company-role">
                <span className="company">Ozibook</span> - 
                <span className="role">Data Analyst</span>
              </div>
              <div className="date">2024 May - 2024 July</div>
              <ul>
                <li>
                  Led web scraping projects on LinkedIn to identify new leads as
                  lead generation tasks.
                </li>
                <li>
                  Created Excel Dashboards to visualize team progress as well as
                  managed a team of interns.
                </li>
              </ul>
            </div>
            <div className="icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="job-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="content">
              <div className="company-role">
                <span className="company">Oddminds Innovation</span> - 
                <span className="role">FullStack Developer</span>
              </div>
              <div className="date">2024 August - 2024 October</div>
              <ul>
                <li>
                  Enhanced backend functionalities by integrating Firebase Storage,
                  Emulator, and Node.js, improving system efficiency and
                  scalability.
                </li>
                <li>
                  Developed frontend features using Next.js as well as other
                  frontend libraries for various components.
                </li>
              </ul>
            </div>
            <div className="icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-globe" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;