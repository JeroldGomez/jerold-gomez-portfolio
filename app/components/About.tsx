import Image from "next/image";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ArrowUpRightIcon } from "@heroicons/react/20/solid";

const About = () => {
  return (
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
  );
};

export default About; 