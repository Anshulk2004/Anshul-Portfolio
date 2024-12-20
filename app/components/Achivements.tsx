"use client";
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Achievement {
  title: string;
  description: string | ReactNode;
}

interface AchievementCardProps {
  title: string;
  description: string | ReactNode;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ title, description, index }) => {
  // Alternating slide-in directions based on index
  const direction = index % 2 === 0 ? -30 : 30;
  
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: direction,
      rotateY: direction / 2
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ 
        scale: 1.03,
        rotateY: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      className="bg-zinc-900/50 rounded-lg p-6 backdrop-blur-sm border border-zinc-800 
                 transform transition-all duration-300 hover:bg-zinc-800/50 
                 hover:border-zinc-700"
    >
      <motion.h3 
        className="text-white text-xl font-medium mb-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-zinc-300 text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Achievements: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "Geeks for Geeks Solving for India Hackathon",
      description: "Top 15 in Western Regional Finals."
    },
    {
      title: "PEC Hacks 36 Hrs Hackathon",
      description: "Top 50 teams out of 500+ teams in finals."
    },
    {
      title: "Citi Bank Ada Lovelace Hackathon",
      description: "Second out of 40+ teams in the institute, top 20 overall out of 300+ teams."
    },
    {
      title: "GenAI Certified",
      description: "Oracle Cloud Infrastructure 2024 Generative AI Professional."
    },
  ];

  const sectionVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0,
      rotateX: -45
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4 bg-black mb-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex justify-center mb-8"
          variants={titleVariants}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateZ: [-1, 1, -1],
              transition: {
                rotateZ: {
                  repeat: Infinity,
                  duration: 1
                }
              }
            }}
            style={{
              background: "linear-gradient(135deg, #4a90e2, #8e44ad)",
              padding: "0.5rem 1.5rem",
              borderRadius: "8px",
              color: "white",
              fontSize: "1.5rem",
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              letterSpacing: "1px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            ACHIEVEMENTS
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={index}
              index={index}
              title={achievement.title}
              description={achievement.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Achievements;