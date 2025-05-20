// src/components/ProjectCard.tsx
'use client'; // If you plan to use client-side hooks like Tilt here later

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/20/solid"; // Or use GitHub icon from public
// import Tilt from 'react-parallax-tilt'; // Optional: If you want to add tilt to project cards
import Tilt from 'react-parallax-tilt'; 

interface ProjectCardProps {
    title: string;
    imageUrl: string;
    description: string;
    technologies: string[];
    liveLink?: string | null;
    githubLink?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    imageUrl,
    description,
    technologies,
    liveLink,
    githubLink,
}) => {
    const cardContent = (

            <div className="p-5 sm:p-6 rounded-xl bg-neutral-800/40 backdrop-blur-md border border-neutral-700/60 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/30 flex flex-col h-full group/card transform hover:scale-[1.01] transition-transform duration-300">
                <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-4 border border-neutral-700/50 group-hover/card:border-white/30 transition-colors duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 transition-opacity duration-300 z-10" />
                    <Image
                    src={imageUrl}
                    alt={`Screenshot of ${title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                    />
                </div>

                {/* Text Content */}
                <div className="flex flex-col flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold font-[family-name:var(--font-geist-sans)] mb-2 group-hover/card:text-white transition-colors duration-300">
                    {title}
                    </h3>
                    <div className="text-sm text-[#929DA7] leading-relaxed mb-4 flex-grow font-[family-name:var(--font-geist-sans)] transition-colors duration-300 group-hover/card:text-[#c4c4c4]">
                        {description.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-3 last:mb-0">
                                {paragraph.trim()}
                            </p>
                        ))}
                    </div>
                    {/* <p className="text-sm text-[color:var(--foreground)] opacity-80 leading-relaxed mb-4 flex-grow font-[family-name:var(--font-geist-sans)] group-hover/card:opacity-100 transition-opacity duration-300">
                    {description}
                    </p> */}

                    {/* Technologies */}
                    <div className="mb-4">
                    <h4 className="text-xs font-semibold font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-blue)] mb-1.5 uppercase tracking-wider group-hover/card:text-white/90 transition-colors duration-300">
                        Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs font-[family-name:var(--font-geist-mono)] bg-cyan-900/30 text-cyan-300 px-2.5 py-1 rounded-lg border border-cyan-700/30 hover:bg-cyan-900/50 hover:border-cyan-700/50 transition-all duration-300"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-4 mt-auto pt-3 border-t border-neutral-700/50 group-hover/card:border-white/20 transition-colors duration-300">
                    {liveLink && (
                        <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-blue)] hover:text-[color:var(--primary-blue)] transition-all duration-300 inline-flex items-center gap-1.5 group/link hover:translate-x-0.5"
                        >
                        Live Demo
                        <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                    )}
                    {githubLink && (
                        <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-blue)] hover:text-[color:var(--primary-blue)] transition-all duration-300 inline-flex items-center gap-1.5 group/link hover:translate-x-0.5"
                        >
                        <Image src="/github.png" alt="GitHub" width={14} height={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity duration-300" />
                        Source Code
                        <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </a>
                    )}
                    </div>
                </div>
            </div>
    );
  return <div className="group h-full">{cardContent}</div>;
};

export default ProjectCard;