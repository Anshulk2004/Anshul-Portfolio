import { useEffect } from "react";
import "./styles.css";
import InteractiveMenu from "./components/interactiveMenu";
import { motion } from "framer-motion";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio Website</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <link rel="icon" type="image/jpg" href="/Images/anshul.jpg" />
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">A</div>
          <div className="logo-text">Software Engineer</div>
        </a>
        <InteractiveMenu />
      </header>
      <div className="hero-section">
        <section className="hero-container">
          <div className="hero-blue">
            <div className="content">
              <h1>
                <small>Hi, I'm</small> Anshul Kumar
              </h1>
              <p>
                A 3rd-year B.Tech CSE student passionate about becoming a
                skilled Machine Learning or Software Engineer.
                <span>
                  I am proficient in data science, machine learning, and have
                  hands-on experience with large language models, generative AI,
                  and web technologies.
                </span>
                <span>
                  Outside of tech, I enjoy solving puzzles, reading tech
                  articles, and playing outdoor sports.
                </span>
              </p>
              <p>
                <strong>College Name:</strong> Indian Institute of Information
                Technology, Pune <br />
                <strong>Branch:</strong> Computer Science and Engineering
              </p>
              <div className="call-to-action">
                <a href="./Images/anshul_resume.pdf" className="button black">
                  View Resume
                </a>
                <a
                  href="mailto:hello@adriantwarog.com"
                  className="button white"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
          <div className="profile-picture-container">
            <img
              src="./Images/chillguy.jpg"
              alt="Anshul Kumar"
              className="profile-pic"
            />
            <div className="social-links">
              <a href="https://github.com/Anshulk2004" target="_blank">
                <i className="fab fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/anshul-kumar-627001250/"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a href="https://leetcode.com/u/Anshulk0102/" target="_blank">
                <i className="fas fa-code" />
              </a>
            </div>
          </div>
        </section>
      </div>
      <section id='Experience'>
      <div>
        <WorkExperience />
      </div>
      </section>
      <section id='Skills'>
      <div>
        <Skills />
      </div>
      </section>
      <section id= 'Projects'>
      <div>
        <Projects />
      </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
