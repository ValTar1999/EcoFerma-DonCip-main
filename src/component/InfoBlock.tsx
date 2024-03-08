import React from 'react';
import bg_img from '../img/farm2-home-pic5.jpg';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface InfoBlockProps {
    title: string;
    content: string[];
}

const InfoBlock: React.FC<InfoBlockProps> = ({ title, content }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5 // Adjust threshold as needed
    });

    const { scrollY } = useViewportScroll();
    const translateY = useTransform(scrollY, [0, 2000], [0, 100]); // Adjust range as needed

    return (
        <div className="bg-green-900 relative overflow-hidden">
            <motion.img
                className="w-2/3 object-cover absolute right-0 opacity-40"
                src={bg_img}
                alt=""
                style={{ y: inView ? translateY : 0 }}
            />
            <div className="container max-w-6xl px-4 mx-auto py-32 relative" ref={ref}>
                <h2 className="text-3xl text-green-100 font-bold">{title}</h2>
                <ul className="mt-4 grid pl-10 gap-4">
                    {content.map((item, index) => (
                        <li key={index} className="text-xl list-disc text-green-200">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default InfoBlock;
