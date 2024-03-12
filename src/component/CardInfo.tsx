import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type CardInfoProps = {
  title: string;
  text: string;
  variant: 'md:flex-row' | 'md:flex-row-reverse';
  img: string;
  titleText?: string;
  textList?: string[];
};

const CardInfo: React.FC<CardInfoProps> = ({ title, text, variant, img, titleText, textList }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        className={`px-4 py-10 flex flex-col ${variant} lg:items-start gap-5 xl:gap-10 border-b border-green-500`}
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationVariants}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          className="rounded-tl-3xl rounded-br-3xl w-full md:w-2/4 object-cover h-full transition duration-500"
          src={img}
          alt=""
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? 'visible' : 'hidden'}
          variants={animationVariants}
          transition={{ duration: 0.5 }}
        />
        <div className="">
          <motion.h2
            className="text-xl font-bold text-green-900 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="mt-4 text-green-700 font-semibold text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? 'visible' : 'hidden'}
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            {text}
          </motion.p>
          {titleText && (
            <motion.p
              className="my-4 text-green-700 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              {titleText}
            </motion.p>
          )}
          {textList && (
            <motion.ul
              className="list-disc pl-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? 'visible' : 'hidden'}
              variants={animationVariants}
              transition={{ duration: 0.5 }}
            >
              {textList.map((item, index) => (
                <motion.li
                  key={index}
                  className="text-green-700 font-normal text-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? 'visible' : 'hidden'}
                  variants={animationVariants}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default CardInfo;
