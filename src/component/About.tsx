import React from 'react';

type AboutProps = {
  title: string;
  text: string;
};

const About: React.FC<AboutProps> = ({ title, text }) => {
  return (
    <div className="container mx-auto max-w-2xl text-center py-12 xl:py-28">
      <h2 className="text-3xl font-bold text-green-900 md:text-5xl">{title}</h2>
      <p className="mt-4 text-green-700">{text}</p>
    </div>
  );
};

export default About;