'use client'; 

import Image from "next/image"; // Section icon
import ExperienceItem from "./components/ExperienceItem"; // Import the component
import Tilt from 'react-parallax-tilt'; 

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
        <p className="text-sm font-light leading-relaxed font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-text-color)]">
          Hi, my name is <br /><br />
          <span className="text-5xl font-bold font-[family-name:var(--font-geist-sans)] text-[color:var(--secondary-text-color)]">
            Jerold Gomez
          </span> <br />
          <span className="text-[#929DA7] text-5xl font-bold font-[family-name:var(--font-geist-sans)]">
            A data{" "} 
            <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
            science{" "}
            </span>
            enthusiast
          </span>
        </p>
        <p className="text-xl font-semibold font-[family-name:var(--font-geist-sans)] text-[#929DA7]"> 
          Currently pursuing my Bachelor's degree in Computer Science, I find joy in unraveling the insights hidden within data sets and transforming them into {" "}
          <span className="font-normal text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic">
            meaningful stories.
          </span>
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row font-[family-name:var(--font-geist-sans)]">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/mail.png" alt="Vercel logomark" width={20} height={20} />
            Email
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] gap-2 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/github.png" alt="Vercel logomark" width={20} height={20} />
            Github
          </a>
        </div>
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
        <div className="flex flex-col mb-80">
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
            <div className="w-full sm:w-1/3 flex-shrink-0 mb-6 sm:mb-0">
              <Tilt
                className="tilt-container overflow-hidden rounded-lg"
                perspective={1000} // Adjust perspective
                glareEnable={true} // Add a glare effect
                glareMaxOpacity={0.3} // Glare opacity
                glarePosition="all"
                scale={1.02} // Slight scale on hover
                tiltMaxAngleX={15} // Max tilt on X axis
                tiltMaxAngleY={15} // Max tilt on Y axis
                transitionSpeed={1000} // Speed of tilt returning to normal
                // gyroscope={true} // Enable tilt on mobile gyroscope
              >
              {/* The actual content to be tilted */}
              <div className="tilt-inner bg-neutral-800/50 p-1 rounded-lg">
                <Image
                  className="rounded-md w-full h-auto block"
                  src="/jerold.jpg"
                  alt="My Picture"
                  width={300} // Intrinsic width
                  height={300} // Intrinsic height
                  priority
                />
              </div>
            </Tilt>
            </div>
            <div className="w-full sm:w-2/3">
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
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <div className="flex flex-col gap-y-8">
          <div>
            <h2 className="text-2xl sm:text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
            <span className="text-sm font-light font-[family-name:var(--font-geist-mono)] mr-2">
              02.
            </span>
            Where I’ve{" "}
            <span className="font-normal font-[family-name:var(--font-playfair-display)] italic">
            Worked
            </span >
             
            </h2>
            <div className="h-[1px] w-full bg-[#383838] opacity-60 mt-4"></div>
            
          </div>

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
      </section>
    </div>
  );
}