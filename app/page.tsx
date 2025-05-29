'use client'; 

import ExperienceItem from "./components/ExperienceItem";
import ProjectCard from "./components/ProjectCard";
import { motion } from 'framer-motion';
import CircleNavBar from "./components/CircleNavBar";
import { projectsData } from './data/projects';
import { workExperience } from './data/experience';
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";


export default function Home() {
  return (
    <div className="relative">
      <CircleNavBar />
      
      <Hero />

      <section className="
        w-full 
        max-w-3xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-16
        relative z-10
      ">
        <About />
        
        {/* Divider */}
        <div className="my-100"></div>

        {/* Work Experience Section */}
        <div className="flex flex-col" id="experience">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-2 md:gap-0">
              <h2 className="text-[#fff] text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
                <span className="text-[13px] font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
                  02.
                </span>
                Where I&apos;ve Worked{" "}
                <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1">
                </span>
              </h2>
              <a
                href="/JeroldGomez_Resume_Portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-200 text-[#fff] hover:text-[#929DA7] font-extralight text-[13px] font-[family-name:var(--font-geist-mono)]"
              >
                View Resume
                <ArrowUpRightIcon className="w-4 h-4 ml-1 inline-block opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          <div className="flex flex-col gap-y-6">
            {workExperience.map((exp, index) => (
              <ExperienceItem
                key={index}
                date={exp.date}
                logo={exp.logo}
                alt={exp.alt}
                title={exp.title}
                companyLink={exp.companyLink}
                description={exp.description}
                location={exp.location}
                locationType={exp.locationType}
              />
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="my-100"></div>

        {/* My Project Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          id="projects"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-2 md:gap-0 text-[#fff]">
            <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
              <span className="text-[13px] font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
                03.
              </span>
              What I&apos;ve Built{" "}
              <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1">
              </span>
            </h2>
            <a
                href="https://github.com/JeroldGomez"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-200 text-[#fff] hover:text-[#929DA7] font-extralight text-[13px] font-[family-name:var(--font-geist-mono)]"
              >
                View More on Github
                <ArrowUpRightIcon className="w-4 h-4 ml-1 inline-block opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
          </div>

          {/* Grid for Project Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                className="h-full"
              >
                <ProjectCard
                  title={project.title}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  technologies={project.technologies}
                  liveLink={project.liveLink}
                  githubLink={project.githubLink}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <div className="my-100"></div>

        <Contact />
      </section>

      <Footer />
    </div>
  );
}