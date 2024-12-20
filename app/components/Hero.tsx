'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero-section">
      <section className="hero-container">
        <motion.div 
          className="hero-blue"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="content">
            <motion.h1 variants={itemVariants}>
              <motion.span 
                variants={itemVariants}
                className="block"
                style={{ 
                    fontSize: '48px',  
                    color: '#ffffff',  
                    fontWeight: '300'
                  }}
              >
                Hi, I'm
                
              </motion.span>
              Anshul Kumar
            </motion.h1>
            <motion.p variants={itemVariants}>
              A 3rd-year B.Tech CSE student passionate about becoming a
              skilled Machine Learning or Software Engineer.
              <motion.span 
                variants={itemVariants}
                className="block mt-2"
              >
                I am proficient in data science, machine learning, and have
                hands-on experience with large language models, generative AI,
                and web technologies.
              </motion.span>
              <motion.span 
                variants={itemVariants}
                className="block mt-2"
              >
                Outside of tech, I enjoy solving puzzles, reading tech
                articles, and playing outdoor sports.
              </motion.span>
            </motion.p>
            <motion.p variants={itemVariants}>
              <strong>College Name:</strong> Indian Institute of Information
              Technology, Pune <br />
              <strong>Branch:</strong> Computer Science and Engineering
            </motion.p>
            <motion.div 
              className="call-to-action"
              variants={itemVariants}
            >
              <a href="./Images/anshul_resume.pdf" className="button black">
                View Resume
              </a>
              <a href="mailto:hello@adriantwarog.com" className="button white">
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="profile-picture-container"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="./Images/anshul.jpg"
            alt="Anshul Kumar"
            className="profile-pic"
          />
          <div className="social-links">
            <a href="https://github.com/Anshulk2004" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
            </a>
            <a 
              href="https://www.linkedin.com/in/anshul-kumar-627001250/" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://leetcode.com/u/Anshulk0102/" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-code" />
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;