'use client'; 

import Image from "next/image"; // Section icon
import ExperienceItem from "./components/ExperienceItem"; // Import the component
import ProjectCard from "./components/ProjectCard";
import Tilt from 'react-parallax-tilt'; 
import { motion } from 'framer-motion'; // Add Framer Motion import
import { LightBulbIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon, } from "@heroicons/react/24/outline";
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import CircleNavBar from "./components/CircleNavBar";
import { projectsData } from './data/projects';
import { workExperience } from './data/experience';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitStatus({ type: null, message: '' });

      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setSubmitStatus({
            type: 'success',
            message: 'Message sent successfully! I will get back to you soon.'
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error(data.error || 'Failed to send message');
        }
      } catch (error) {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="relative">
      <CircleNavBar />
      {/* Introduction Section - Fixed height, centered */}
      
      <section className="
        h-screen
        flex 
        flex-col 
        justify-center 
        items-start
        w-full 
        max-w-3xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        gap-8
        relative z-10
      ">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          id="home"
          className="text-sm font-light leading-relaxed font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-text-color)]"
        >
          Hi, my name is <br /><br />
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl font-bold font-[family-name:var(--font-geist-sans)] text-[color:var(--secondary-text-color)]"
          >
            Jerold Gomez
          </motion.span> <br />
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-[#929DA7] text-5xl font-bold font-[family-name:var(--font-geist-sans)]"
          >
            A data{" "} 
            <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
            science{" "}
            </span>
            enthusiast
          </motion.span>
        </motion.p>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl font-semibold font-[family-name:var(--font-geist-sans)] text-[#929DA7]"
        > 
          Currently pursuing my Bachelor's degree in Computer Science, I find joy in unraveling the insights hidden within data sets and transforming them into {" "}
          <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
            meaningful stories.
          </span>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 items-center flex-col sm:flex-row font-[family-name:var(--font-geist-sans)]"
        >
          <motion.a
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/mail.png" alt="Vercel logomark" width={20} height={20} />
            Email
          </motion.a>
          <motion.a
            // whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] gap-2 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" alt="Vercel logomark" width={20} height={20} />
            Github
          </motion.a>
        </motion.div>
      </section>

      {/* Content Section - Scrollable */}
      <section className="
        w-full 
        max-w-3xl 
        mx-auto 
        px-4 sm:px-6 lg:px-8 
        py-16
        relative z-10
      ">

        {/* About me Section */}

        <motion.div 
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-2 md:gap-0">
            <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)] text-[#fff]">
            <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
              01.
            </span>
            A Bit About Me{" "}
            <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1">
            {/* Me */}
            </span>
            
            </h2>
            <a
              href="https://github.com/JeroldGomez"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-200 hover:text-[#929DA7] font-extralight text-[13px] font-[family-name:var(--font-geist-mono)]"
            >
              More About me
              <ArrowUpRightIcon className="w-4 h-4 ml-1 inline-block opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            {/* <div className="h-[1px] w-full bg-[#383838] opacity-60 mt-4"></div> */}
            
            {/* <div
              className="
                h-[1px] w-full opacity-70 mt-4 mb-8 sm:mb-8
                bg-[linear-gradient(to_right,theme(colors.neutral.700)_20%,theme(colors.neutral.100)_50%,theme(colors.neutral.700)_80%)]
                dark:bg-[linear-gradient(to_right,theme(colors.neutral.800)_20%,theme(colors.neutral.400)_50%,theme(colors.neutral.800)_80%)]
                animate-shimmer-line bg-[length:200%_100%]
              "
            ></div> */}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-1/3 flex-shrink-0 mb-6 sm:mb-0"
            >
              <Tilt
                className="tilt-container overflow-hidden rounded-lg"
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.1}
                glarePosition="all"
                scale={1.02}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                transitionSpeed={1000}
              >
                <div className="tilt-inner bg-neutral-800/50 p-1 rounded-lg">
                  <Image
                    className="rounded-md w-full h-auto block"
                    src="/jerold.jpg"
                    alt="My Picture"
                    width={300}
                    height={300}
                    priority
                  />
                </div>
              </Tilt>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-2/3"
            >
              <p className="font-[family-name:var(--font-geist-sans)] text-[color:var(--secondary-text-color)] leading-relaxed">
                I am a passionate{" "}
                <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
                Computer Science{" "}
                </span>
                student with a keen interest in data science and AI. I enjoy working on projects that combine intelligent technologies and practical applications to improve user experiences and streamline processes.
              </p>
              <p className="font-[family-name:var(--font-geist-sans)] text-[#929DA7] leading-relaxed mt-4">
                Currently, I am exploring the field of artificial intelligence more deeply through my thesis project, the development of an{" "} 
                <span className="font-normal text-[#ffffff] font-[family-name:var(--font-playfair-display)] italic">
                AI-powered chatbot{" "}
                </span>
                that assists students with general inquiries at our institution. This project involves tools such as OpenAI, Firebase, and Node.js, and has strengthened my skills in natural language processing, chatbot development, and cloud integration.
                <br /> <br />
                Outside of academics, I'm constantly learning new technologies, experimenting with innovative solutions, and looking for ways to apply my knowledge to{" "} 
                <span className="font-normal font-[family-name:var(--font-playfair-display)] italic text-[#ffffff]">
                create meaningful impact{" "}
                </span>
                through tech.
              </p>
            </motion.div>
          </div>
        </motion.div>
        
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
            <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
            <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
              02.
            </span>
            Where I've Worked{" "}
            <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1">
            {/* Worked */}
            </span >
            
            </h2>
            <a
              href="https://github.com/JeroldGomez"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-200 hover:text-[#929DA7] font-extralight text-[13px] font-[family-name:var(--font-geist-mono)]"
            >
              View Resume
              <ArrowUpRightIcon className="w-4 h-4 ml-1 inline-block opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            
            {/* <div className="h-[1px] w-full bg-[#383838] opacity-60 mt-4"></div> */}
            {/* <div
              className="
                  h-[1px] w-full opacity-70 mt-4 mb-8 sm:mb-8
                  bg-[linear-gradient(to_right,theme(colors.neutral.700)_20%,theme(colors.neutral.100)_50%,theme(colors.neutral.700)_80%)]
                  dark:bg-[linear-gradient(to_right,theme(colors.neutral.800)_20%,theme(colors.neutral.400)_50%,theme(colors.neutral.800)_80%)]
                  animate-shimmer-line bg-[length:200%_100%]
                "
              ></div> */}
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5 gap-2 md:gap-0">
            <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
              <span className="text-[13px] font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
                03.
              </span>
              What I've Built{" "}
              <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1">
                {/* Built */}
              </span>
            </h2>
            <a
              href="https://github.com/JeroldGomez"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-200 hover:text-[#929DA7] font-extralight text-[13px] font-[family-name:var(--font-geist-mono)]"
            >
              See more on GitHub
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

        {/* Contact me Section */}
        
        <motion.div
        id="contact"
        initial={{ opacity: 0, y: 30 }} // Slightly increased y for a bit more pop
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }} // Trigger when 30% is visible
        transition={{ duration: 0.7, ease: "easeOut" }} // Slightly longer duration, easeOut
        className="w-full mt-20 sm:mt-28" // Increased top margin
      >
        <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)] mb-5"> {/* Use flex for better alignment */}
          <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
            04. {/* Kept your original numbering style for now */}
          </span>
          Let's Connect{" "}
          <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1"> {/* Added ml-1 for slight separation */}
            {/* Connect */}
          </span>
        </h2>

        {/* Animated Divider (from previous suggestion) */}
        {/* <div
          className="
            h-[1px] w-full opacity-60 mt-4 mb-8 sm:mb-8
            bg-[linear-gradient(to_right,theme(colors.neutral.700)_20%,theme(colors.neutral.100)_50%,theme(colors.neutral.700)_80%)]
            dark:bg-[linear-gradient(to_right,theme(colors.neutral.800)_20%,theme(colors.neutral.400)_50%,theme(colors.neutral.800)_80%)]
            animate-shimmer-line bg-[length:200%_100%]
          "
        ></div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {/* --- Left Column: Info & Socials --- */}
          <motion.div
            initial={{ opacity: 0, x: -25 }} // Slightly increased x
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-5 sm:gap-6" // Increased gap
          >
            <p className="opacity-80 font-[family-name:var(--font-geist-sans)] font-light">
              I'm always open to discussing new projects, creative ideas, or opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            {/* Social/Contact Links - Enhanced Styling */}
            <div className="flex flex-col gap-4 mt-2 sm:mt-4">
              {[
                
                {
                  href: "mailto:jeroldgomez345@gmail.com", 
                  icon: <Image src="/email-w.png" alt="LinkedIn" width={20} height={20} className="opacity-80 group-hover:opacity-100"/>,
                  text: "jeroldgomez345@gmail.com",
                  label: "Email Jerold Gomez"
                },
                {
                  href: "https://www.linkedin.com/in/jeroldgomez/",
                  icon: <Image src="/linkedin-logo.png" alt="LinkedIn" width={20} height={20} className="opacity-80 group-hover:opacity-100"/>,
                  text: "linkedin.com/in/jeroldgomez", // Or just "LinkedIn Profile"
                  label: "Jerold Gomez on LinkedIn"
                },
                {
                  href: "https://github.com/JeroldGomez", 
                  icon: <Image src="/github.png" alt="GitHub" width={20} height={20} className="opacity-80 group-hover:opacity-100"/>,
                  text: "github.com/JeroldGomez", // Or just "GitHub Profile"
                  label: "Jerold Gomez on GitHub"
                },
                {
                  href: "https://www.facebook.com/JeroldGomezzz",
                  icon: <Image src="/facebook.png" alt="GitHub" width={20} height={20} className="opacity-80 group-hover:opacity-100"/>,
                  text: "facebook.com/JeroldGomezzz", // Or just "GitHub Profile"
                  label: "Jerold Gomez on GitHub"
                },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="
                    group flex items-center gap-3 p-3 rounded-md
                    font-[family-name:var(--font-geist-mono)] text-sm sm:text-base
                    text-[color:var(--secondary-blue)]
                    border border-transparent hover:border-neutral-700 dark:hover:border-neutral-600
                    hover:bg-neutral-800/30 dark:hover:bg-neutral-900/40
                    transition-all duration-200 ease-out
                  "
                >
                  <span className="flex-shrink-0 text-[color:var(--primary-blue)] group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="truncate group-hover:text-white">{link.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* --- Right Column: Contact Form --- */}

          
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
              duration: 0.8,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1] // Custom easing for smoother motion
            }}
            className="p-6 rounded-xl bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 hover:border-neutral-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/20"
          >
            
            <h3 className="text-xl sm:text-lg font-normal mb-5 sm:mb-3 font-[family-name:var(--font-geist-sans)] text-[color:var(--primary-blue)]">
              Send a Quick Message
            </h3>
            <div className="h-[1px] w-full bg-[#383838] opacity-50"></div>
            <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-[14px] mb-1.5 font-medium opacity-70 font-[family-name:var(--font-geist-sans)]">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-neutral-900/60 dark:bg-black/30 border ${
                    errors.name ? 'border-red-500' : 'border-neutral-700/70'
                  } rounded-md focus:outline-none focus:border-[color:var(--primary-blue)] focus:ring-1 focus:ring-[color:var(--primary-blue)] transition-colors duration-200 text-white placeholder:text-neutral-500 font-[family-name:var(--font-geist-mono)]`}
                  placeholder="entry_name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 font-[family-name:var(--font-geist-mono)]">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-[14px] mb-1.5 opacity-70 font-medium font-[family-name:var(--font-geist-sans)]">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-neutral-900/60 dark:bg-black/30 border ${
                    errors.email ? 'border-red-500' : 'border-neutral-700/70'
                  } rounded-md focus:outline-none focus:border-[color:var(--primary-blue)] focus:ring-1 focus:ring-[color:var(--primary-blue)] transition-colors duration-200 text-white placeholder:text-neutral-500 font-[family-name:var(--font-geist-mono)]`}
                  placeholder="user@domain.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 font-[family-name:var(--font-geist-mono)]">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-[14px] opacity-70 mb-1.5 font-medium font-[family-name:var(--font-geist-sans)]">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2.5 bg-neutral-900/60 dark:bg-black/30 border ${
                    errors.message ? 'border-red-500' : 'border-neutral-700/70'
                  } rounded-md focus:outline-none focus:border-[color:var(--primary-blue)] focus:ring-1 focus:ring-[color:var(--primary-blue)] transition-colors duration-200 text-white placeholder:text-neutral-500 font-[family-name:var(--font-geist-mono)] resize-none`}
                  placeholder="compose_message_here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 font-[family-name:var(--font-geist-mono)]">{errors.message}</p>
                )}
              </div>
              {submitStatus.type && (
                <div className={`p-3 rounded-md ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-500' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-500'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <motion.button
                whileHover={{ boxShadow: "0px 0px 15px rgba(48, 48, 48, 0.3)" }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={isSubmitting}
                className={`font-[family-name:var(--font-geist-sans)] rounded-lg border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Image src="/mail.png" alt="Vercel logomark" width={20} height={20} />
                    Send Email
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
          

          
        </div>
      </motion.div>
      </section>

      {/* Footer Section */}
      
      <footer className="w-full py-10 px-4 mb-22 relative z-20">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          {/* <div className="h-[1px] w-full bg-[#383838] opacity-50 my-10"></div> */}
          <div
          className="
            h-[1px] w-full opacity-60 my-10
            bg-[linear-gradient(to_right,theme(colors.neutral.700)_20%,theme(colors.neutral.100)_50%,theme(colors.neutral.700)_80%)]
            dark:bg-[linear-gradient(to_right,theme(colors.neutral.800)_20%,theme(colors.neutral.400)_50%,theme(colors.neutral.800)_80%)]
            animate-shimmer-line bg-[length:200%_100%]
          "
        ></div>
          <p className="font-normal text-sm max-w-2xl mb-4 font-[family-name:var(--font-geist-sans)] text-[#929DA7]">
          Built with{" "}
            <span className="font-normal font-[family-name:var(--font-geist-sans)] text-[#fff]">
            Next.js, Tailwind CSS{" "}
            </span>
            , and a foundation of late-night coffee and curiosity. This space showcases a passion for data, and a continuous journey of learning and creating in the applications of AI.{" "}
            <span className="font-normal font-[family-name:var(--font-geist-sans)] text-[#fff]">
            Thank you for visiting!
            </span>
            
          </p>
          <p className="text-xs text-[#929DA7] font-[family-name:var(--font-geist-mono)]">
            © {new Date().getFullYear()} Jerold Gomez.
          </p>
        </div>
      </footer>
    </div>
  );
}