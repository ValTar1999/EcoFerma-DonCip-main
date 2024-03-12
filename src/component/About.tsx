import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import img1 from '../img/agronomy.png';

type AboutProps = {
  title: string;
  text: string;
};

const About: React.FC<AboutProps> = ({ title, text }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5 // Adjust threshold as needed
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5 // Adjust duration as needed
      }
    }
  };

  return (
    <div
      ref={ref}
      className="container mx-auto max-w-2xl text-center py-12 xl:py-28 relative overflow-hidden"
    >
      <motion.img
        className="absolute right-0 w-40 h-auto"
        src={img1}
        alt=""
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 0.1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
      />
      <motion.h2
        className="text-3xl font-bold text-green-900 md:text-5xl"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-green-700"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {text}
      </motion.p>
    </div>
  );
};

export default About;