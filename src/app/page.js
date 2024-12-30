// src/app/page.js
"use client";

import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Experience from "@/components/About/Experience";
import Skills from "@/components/About/Skills";
import Reviews from "@/components/About/Reviews";
import Projects from "@/components/About/Projects";
import PricingPlans from "@/components/About/PricingPlans";
import Contact from "@/components/About/Contact";
import Questions from "@/components/About/Questions";
import Navbar from "@/components/About/Navbar";
import Toggle from "@/components/About/Toggle";
import Load from "@/components/About/Load";
import { useState, useRef, useEffect } from "react";



export default function Home() {
  const [id, setId] = useState(0);
  const compsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersecting = entry.isIntersecting;
          if (intersecting) {
            setId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );  

    const compsArr = Array.from(compsRef.current.children);
    compsArr.forEach((comp) => {
      observer.observe(comp);
    });
  }, []) 

  return (
    <>
    <Load />
    <Toggle>
    <Navbar id={id} />
    <div className="w-min" ref={compsRef}>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Reviews />
      <Projects />
      <PricingPlans />
      <Contact />
      <Questions />
    </div>
    </Toggle>
    </>
    
  );
}