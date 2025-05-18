// src/components/ExperienceItem.tsx
import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for internal/external links if needed
import { ArrowUpRightIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/20/solid"; // Import icons
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt'; 


interface ExperienceItemProps {
    date: string;
    logo: string;
    alt: string;
    title: string;
    companyLink?: string; // Optional link for the title
    description: string;
    location: string;
    locationType: "office" | "remote";
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    date,
    logo,
    alt,
    title,
    companyLink,
    description,
    location,
    locationType,
}) => {
    const LocationIcon = locationType === "office" ? MapPinIcon : GlobeAltIcon;

    return (
        <Tilt
            className="tilt-container overflow-hidden rounded-lg"
            perspective={1000} // Adjust perspective
            glareEnable={true} // Add a glare effect
            glareMaxOpacity={0.05} // Glare opacity
            glarePosition="all"
            // scale={1.02} // Slight scale on hover
            tiltMaxAngleX={2} // Max tilt on X axis
            tiltMaxAngleY={2} // Max tilt on Y axis
            transitionSpeed={1000} 
        >
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group"
        >
            <div className="p-6 rounded-xl bg-neutral-800/30 backdrop-blur-sm border border-neutral-700/50 hover:border-neutral-600/70 transition-all duration-300 hover:shadow-lg hover:shadow-neutral-900/20">
                <div className="grid grid-cols-[auto_1fr] gap-4 items-start">
                    {/* Logo */}
                    
                    <div className="h-12 w-12 rounded-md bg-neutral-800/50 border border-neutral-700/50 flex items-center justify-center transition-transform duration-300">
                        <Image
                            src={logo}
                            alt={alt}
                            width={30}
                            height={30}
                        />  
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        {/* Title and Date */}
                        <div className="space-y-1">
                            <h3 className="text-lg font-semibold text-[color:var(--primary-blue)] flex items-center font-[family-name:var(--font-geist-sans)]">
                                {companyLink ? (
                                    <a
                                        href={companyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--secondary-blue)]"
                                    >
                                        {title}
                                        <ArrowUpRightIcon className="w-4 h-4 inline-block opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                ) : (
                                    title
                                )}
                            </h3>
                            <p className="text-sm text-[#929DA7] font-[family-name:var(--font-geist-mono)]">
                                {date}
                            </p>
                        </div>

                        {/* Description */}
                        <div className="text-sm leading-relaxed text-[color:var(--foreground)] opacity-90 font-[family-name:var(--font-geist-sans)] space-y-2">
                            {description.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph.trim()}</p>
                            ))}
                        </div>

                        {/* Location Tag */}
                        <div className="flex items-center gap-2 mt-4 font-[family-name:var(--font-geist-sans)]">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-800/50 text-[color:var(--secondary-blue)] border border-neutral-700/50">
                                <LocationIcon className="w-3 h-3" />
                                {location}
                            </span>
                            <span className="text-xs text-neutral-500">
                                {locationType === "remote" ? "🌐 Remote" : "🏢 On-site"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </Tilt>
        
    );
};

export default ExperienceItem;