import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import bg_header from '../img/download.jpg';

type HeaderProps = {
  title: string;
  text: string;
};

const Header: React.FC<HeaderProps> = ({ title, text }) => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax') as NodeListOf<HTMLElement>;
      parallaxElements.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        element.style.transform = `translateY(${scrollTop * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="relative overflow-hidden">
      <img className="w-full h-dvh object-cover parallax" data-speed="0.5" src={bg_header} alt="" />
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center text-center px-4 xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-green-50 text-3xl md:text-5xl font-bold absolute top-0 pt-28"
          >
            {text}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-bold text-green-900 text-3xl md:text-5xl absolute top-0 pt-44 xl:w-2/4"
          >
            {title}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;