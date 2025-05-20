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
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
              <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
                <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
                  02.
                </span>
                Where I've Worked{" "}
                <span className="font-normal font-[family-name:var(--font-playfair-display)] italic ml-1">
                </span>
              </h2>
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
              </span>
            </h2>
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