'use client'; 

import Image from "next/image"; // Section icon
import ExperienceItem from "./components/ExperienceItem"; // Import the component
import Tilt from 'react-parallax-tilt'; 
import { motion } from 'framer-motion'; // Add Framer Motion import

type Experience = {
  date: string;
  logo: string;
  alt: string;
  title: string;
  companyLink: string;
  description: string;
  location: string;
  locationType: "office" | "remote";
};

const projectsData = [
  {
    title: "AI-Powered Student Chatbot",
    imageUrl: "/projects/chatbot-mockup.png", // <-- Replace with your actual image path
    description:
      "Developed an intelligent chatbot using OpenAI, Firebase, and Node.js to assist university students with general inquiries, streamlining support and improving response times.",
    technologies: ["OpenAI API", "Node.js", "Firebase", "React", "NLP"],
    liveLink: "#", // Optional: Link to live demo (e.g., "https://mychatbot.example.com")
    githubLink: "https://github.com/yourusername/chatbot-project", // Optional
  },
  {
    title: "E-commerce Analytics Dashboard",
    imageUrl: "/projects/dashboard-mockup.png", // <-- Replace
    description:
      "Designed and built an interactive dashboard for an e-commerce client to visualize sales trends, customer behavior, and inventory levels, enabling data-driven decision-making.",
    technologies: ["Python (Pandas, Plotly)", "SQL", "Tableau", "React"],
    liveLink: null, // No live link for this one
    githubLink: "https://github.com/yourusername/ecommerce-dashboard",
  },
  {
    title: "Personal Portfolio Website",
    imageUrl: "/projects/portfolio-mockup.png", // <-- Replace
    description:
      "This very portfolio! Built with Next.js, Tailwind CSS, and showcasing a blend of data science projects and my journey in tech. Features an animated ASCII background.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Canvas API"],
    liveLink: "/", // Link to the current site
    githubLink: "https://github.com/yourusername/my-portfolio",
  },
  // Add more project objects here...
];

const workExperience: Experience[] = [
  {
    date: "Aug - Sep, 2024",
    logo: "/cct_logo_t_main.svg", // <-- Replace with your actual logo path
    alt: "Company A Logo",
    title: "Data Analyst Intern · CCT",
    companyLink: "https://example.com/companya", // <-- Replace with actual link
    description:
      "Developed predictive models for customer churn, resulting in a 15% reduction. Built data pipelines using Python and Airflow to automate reporting processes, saving hundreds of hours.",
    location: "Tagaytay City, Cavite",
    locationType: "office", // 'office' or 'remote'
  },
  {
    date: "2023 - 2024",
    logo: "/cct_logo_t_main.svg", // <-- Replace with your actual logo path
    alt: "University Logo",
    title: "Junior IT Analyst · CCT",
    companyLink: "https://example.edu/ai-lab", // <-- Replace with actual link
    description:
      "Assisted senior researchers with data collection, cleaning, and analysis for machine learning projects. Co-authored a paper on natural language processing techniques presented at a regional conference.",
    location: "Remote",
    locationType: "remote",
  },
  // Add more experience objects here...
];

export default function Home() {
  return (
    <div className="relative">
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
        <div>
          
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            whileHover={{ scale: 1.05 }}
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
            whileHover={{ scale: 1.05 }}
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col mb-80"
        >
          <div className="mb-5">
            <h2 className="text-2xl sm:text-2xl font-bold font-[family-name:var(--font-geist-sans)]">
            <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2">
              01.
            </span>
            A Bit About{" "}
            <span className="font-normal font-[family-name:var(--font-playfair-display)] italic">
            Me
            </span>
             
            </h2>
            <div className="h-[1px] w-full bg-[#383838] opacity-60 mt-4"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full sm:w-1/3 flex-shrink-0 mb-6 sm:mb-0"
            >
              <Tilt
                className="tilt-container overflow-hidden rounded-lg"
                perspective={1000}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glarePosition="all"
                scale={1.02}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
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

        {/* Work Experience Section */}
        <div className="flex flex-col gap-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

          <div>
            <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
            <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2">
              02.
            </span>
            Where I've{" "}
            <span className="font-normal font-[family-name:var(--font-playfair-display)] italic">
            Worked
            </span >
             
            </h2>
            <div className="h-[1px] w-full bg-[#383838] opacity-60 mt-4"></div>
            
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

        {/* My Project Section */}
      </section>
    </div>
  );
}