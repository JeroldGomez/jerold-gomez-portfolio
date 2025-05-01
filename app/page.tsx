import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/24/outline"; // Section icon
import ExperienceItem from "./components/ExperienceItem"; // Import the component

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
    logo: "/cct_logo_t.png", // <-- Replace with your actual logo path
    alt: "Company A Logo",
    title: "Data Analyst Intern - CCT",
    companyLink: "https://example.com/companya", // <-- Replace with actual link
    description:
      "Hands-on experience in data management, analysis, and visualization.",
    location: "Tagaytay City, Cavite",
    locationType: "office", // 'office' or 'remote'
  },
  {
    date: "2023 - 2024",
    logo: "/cct_logo_t.png", // <-- Replace with your actual logo path
    alt: "University Logo",
    title: "Junior IT Analyst - CCT",
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
    // No need for the outer empty div usually
    // Use <main> as the primary container for the page's main content
    <main className="
      min-h-screen
      flex flex-col
      justify-center
      w-full
      max-w-3xl
      mx-auto
      item-start
      px-4 sm:px-6 lg:px-8
      gap-8
      relative z-10
      ">

      {/* Optional: Group Image and Intro Text if needed for specific alignment later */}
      {/* <div className="flex flex-col items-start gap-8"> */}
        <div>
          <Image
            className="rounded-lg" // Make the image circular
            src="/jerold.jpg"
            alt="My Picture"
            width={100} // Adjust size as desired (make width/height equal for circle)
            height={100}
            priority
          />
        </div>
        

        {/* Use a more descriptive text size class like text-lg or text-xl */}
        {/* Use leading-relaxed or similar for better line spacing */}
        <p className="text-xl leading-relaxed font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-text-color)]"> 
          <span className="text-4xl leading-relaxed font-[family-name:var(--font-playfair-display)] text-[color:var(--secondary-text-color)]">
            A{" "} 
          </span> 
          dedicated{" "}
          <span
            className="font-semibold text-[color:var(--primary-text-color)] font-[family-name:var(--font-playfair-display)] italic"
          >
            data science enthusiast
          </span>
            {" "}with a profound love for the captivating realm of analytics. Currently pursuing my Bachelor's degree in Computer Science, I find joy in unraveling the insights hidden within data sets and transforming them into meaningful stories.
        </p>
        <div className="flex gap-4 items-center flex-col sm:flex-row font-[family-name:var(--font-geist-sans)]">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/mail.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Email
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] gap-2 dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github.png"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Github
          </a>
        </div>

      {/* --- Add Other Sections Below --- */}
      
      <section className="w-full flex flex-col gap-y-8 mt-30"> {/* Add gap between header and items */}
         {/* Section Header */}
          <h2 className="text-2xl sm:text-3xl flex items-center gap-4 font-medium text-[color:var(--primary-blue)] font-[family-name:var(--font-playfair-display)]">
              <Image
                className="w-6 h-6 sm:w-6 sm:h-6"
                src="/briefcase.png"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Work Experience
          </h2>
          <div className="w-full h-px bg-neutral-700/60" />

          {/* List of Experience Items */}
          <div className="flex flex-col gap-y-6 font-[family-name:var(--font-geist-mono)]"> {/* Vertical line simulation & padding */}
            {workExperience.map((exp, index) => (
              <ExperienceItem
                key={index} // Use a unique key, index is okay if list isn't reordered
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
      </section>

    </main>
  );
}