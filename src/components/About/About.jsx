import React from 'react';
import Heading from "./Heading";
import Achievements from "./Achievements";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets"; // Importing icons and text data

const About = () => {
  return (
    <div 
      id="about" // Ensure this ID matches the `id` used in `navbarData`
      className="min-h-screen flex flex-col items-center justify-center"
    >
      {/* Heading positioned directly above the image */}
      <div className="flex flex-col items-start mb-4"> 
        <Heading text="About Me" className="text-left" /> 
      </div>
      
      <div className="w-full max-w-4xl flex items-center justify-between gap-10">
        
        {/* Image Section */}
        <Image
          src="/about-me.png"
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] md:hidden"
        />
        
        {/* About Me Text and Download Section */}
        <div className="relative max-w-[500px] rounded-xl bg-zinc-100 p-6 text-justify dark:bg-zinc-700 transition-colors">
          
          {/* Arrow Icon */}
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden dark:text-zinc-700">
            {arrowLeftIcon} 
          </span>
          
          {/* About Text */}
          <p className="text-lg font-light text-gray-700 mb-4 first-letter:pl-3 lg:text-[16px] sm:text-[14px] dark:text-white">
            {aboutText}
          </p>
          
          {/* Download CV Button */}
          <a
            href="/nick-cv.pdf"
            download="nick-cv.pdf"
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span> {/* Ensure downloadIcon is rendered correctly */}
          </a>
        </div>
      </div>
      
      {/* Achievements Section */}
      <div className="mt-20 w-full max-w-4xl flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        
        {aboutData.map((item, i) => ( 
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements> 
        ))}
        
      </div>
      
    </div>
  );
}

export default About;