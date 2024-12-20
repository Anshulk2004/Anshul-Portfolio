"use client";
import React from 'react';
import { motion } from 'framer-motion';

interface Activity {
  title: string;
  description: string;
  period?: string;
}

interface ActivityCardProps {
  title: string;
  description: string;
  period?: string;
  index: number;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ title, period, description, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
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
        scale: 1.02,
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
      className="bg-black rounded-lg p-6 backdrop-blur-sm transform transition-all duration-300 hover:bg-zinc-900"
    >
      <motion.h3 
        className="text-white text-xl mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
      {period && (
        <motion.p 
          className="text-zinc-400 text-sm mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ({period})
        </motion.p>
      )}
      <motion.p 
        className="text-zinc-300 text-base leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Activities: React.FC = () => {
  const activities: Activity[] = [
    {
      title: "Sports Club | Head",
      period: "2023 - Present",
      description: "Organized Eklavya (Annual Sports Fest) 2 times with 500+ participants and National Sports Day engaging 300+ students."
    },
    {
      title: "localhost | Web3 and AI/ML Mentor",
      period: "2023 - Present",
      description: "Initiated web development sessions and Web3 workshops for 200+ learners, and organized 2 major hackathons for students."
    },
    {
      title: "E-Cell | Cluster Head",
      period: "2023 - Present",
      description: "Coordinated E-Summit 2k23 and 2k24, attracting over 1,000 students, and conducted various tech events to drive student participation."
    },
    {
      title: "Quantnum | Event Management Head",
      period: "2023 - Present",
      description: "Conducted Inter College Mathematics competetion as a celebration for the National Mathematics Day."
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { 
      y: -20,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      className="py-16 px-4 mb-20"
      style={{ backgroundColor: "#1a1a1a" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={titleVariants}
          className="flex justify-center mb-8"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)"
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
            EXTRA CURRICULAR
          </motion.div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              index={index}
              title={activity.title}
              period={activity.period}
              description={activity.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Activities;