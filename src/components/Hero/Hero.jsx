"use client";

import Image from "next/image";
import { heroIcons } from "@/assets"; // Adjust the path if necessary
import { motion, useMotionValue, useTransform, mvotio, useSpring, delay } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({ innerWidth: 0, innerHeight: 0 });
  const [mouseMove, setMouseMove] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
const [buttonHover, setButtonHover] = useState(false);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    setMouseMove(true);
  } ;

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(x, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(y, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="h-screen grid place-items-center"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <motion.div 
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="flex flex-col items-center justify-center gap-y-3 font-light capitalize">

        {/* Person Image and Greeting */}
        <motion.div
          className="flex items-center justify-center"
          style={{
            rotateX: mouseMove ? rotateX : 0,
            rotateY: mouseMove ? rotateY : 0,
            transition: "0.1s",
          }}
        >
          <Image
            src="/person.png"
            alt="Person Image"
            width={400}
            height={400}
            priority={true}
            className="h-auto w-[150px]"
          />
          <motion.span 
          className="absolute text-3xl font-semibold text-white top-10"
          initial={{ scale: 0 }}
          animate={{ 
            opacity: buttonHover ? 0 : 1,
            scale: buttonHover ? 2 : 0,
            y: buttonHover ? -40 : 0,
           }} 
           transition={{ opacity: { delay: 0.4 } }}
          >
            Hi 👋</motion.span>
        </motion.div>
        
        {/* Title and Subtitle */}
        <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 sm:text-2xl dark:text-white transition-colors">
          Hi, my name is ED Bonilla &
        </h1>
        <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">UX/UI Designer | Front-End Developer </p>
        
        {/* "Talk to me" Button */}
        <a
          href="#contact" 
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Talk to me
        </a>

        {/* Social Icons */}
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 flex justify-center gap-x-10 text-3xl text-yellow-600 sm:text-2xl">
          {heroIcons && heroIcons.map((icon, i) => (
            <motion.a 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
              href="#" 
              key={i} 
              aria-label={`Social Icon ${i + 1}`}
              className="rounded-lg hover:bg-red-400 hover:text-white transition-colors p-2"
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;