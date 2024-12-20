import { useEffect } from "react";
import "./styles.css";
import InteractiveMenu from "./components/interactiveMenu";
import { motion } from "framer-motion";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Footer from "./components/Footer";
import Achievements from "./components/Achivements";
import Activities from "./components/Activities";
import Hero from "./components/Hero";

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
          <div className="logo">AK</div>
          {/* <div className="logo-text">Software Engineer</div> */}
        </a>
        <InteractiveMenu />
      </header>     
      <section id='Home'>
      <div>
        <Hero />
      </div>
      </section>
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
      <section id= 'Achivements'>
      <div>
        <Achievements />
      </div>
      </section>
      <section id= 'Activities'>
      <div>
        <Activities />
      </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}
