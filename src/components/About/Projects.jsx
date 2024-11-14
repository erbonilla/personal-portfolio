'use client';
import { useEffect, useRef, useState } from "react";
import Heading from "./Heading";
import Project from "./Project";
import { projectsData, projectsButton } from "@/assets"; // Adjusted import to match your assets path
import { animate, motion } from "framer-motion";

const Projects = () => {
    const [tech, setTech] = useState("All");
    const [index, setIndex] = useState(0);
    const prevIndex = useRef(0);
    const buttonsRef = useRef([]);

    const handleClick = (i, tech) => {
        setIndex(i);
        setTech(tech);

        // Animate the previous and current button based on index
        animate(buttonsRef.current[prevIndex.current], { 
            opacity: 0.5, 
            scale: 1 
        });
        animate(buttonsRef.current[i], { 
            opacity: 1, 
            scale: 1.2 
        });

        prevIndex.current = i;
    };

    useEffect(() => {
        handleClick(index, tech); // Initialize the first button animation
    }, [index, tech]);

    // Filter projects based on the selected technology
    const filteredProjects = tech === "All"
        ? projectsData
        : projectsData.filter((project) => project.tech.includes(tech));

    return (
        <div 
            id="projects" // Ensures this section links correctly with the Navbar
            className="min-h-screen py-20 md:px-10"
        >
            <Heading text="Projects" />
            <div className="flex flex-wrap items-center justify-center gap-4 py-10">
                {projectsButton.map((text, i) => (
                    <button
                        key={i}
                        ref={(el) => (buttonsRef.current[i] = el)}
                        onClick={() => handleClick(i, text)}
                        className="border border-yellow-500 rounded-xl px-2 py-1 text-sm font-light tracking-wider text-gray-400 transition-all hover:text-yellow-500"
                    >
                        {text}
                    </button>
                ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {filteredProjects.map((data) => (
                    <motion.div 
                        key={data.name} 
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Project data={data} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;