// src/components/ProjectCard.tsx
'use client'; // If you plan to use client-side hooks like Tilt here later

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/20/solid"; // Or use GitHub icon from public
// import Tilt from 'react-parallax-tilt'; // Optional: If you want to add tilt to project cards

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
    <div className="p-5 sm:p-6 rounded-xl bg-neutral-800/40 backdrop-blur-md border border-neutral-700/60 hover:border-white transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/30 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative w-full aspect-[16/9] rounded-md overflow-hidden mb-4 border border-neutral-700/50">
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive image sizes
          className="object-cover transition-transform duration-300 group-hover:scale-105" // Slight zoom on hover
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-semibold font-[family-name:var(--font-playfair-display)] text-[color:var(--primary-blue)] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[color:var(--foreground)] opacity-80 leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-blue)] mb-1.5 uppercase tracking-wider">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-[family-name:var(--font-geist-mono)] bg-cyan-900/50 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-2 border-t border-neutral-700/50">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-blue)] hover:text-[color:var(--primary-blue)] transition-colors inline-flex items-center gap-1 group/link"
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
              className="text-xs font-medium font-[family-name:var(--font-geist-mono)] text-[color:var(--secondary-blue)] hover:text-[color:var(--primary-blue)] transition-colors inline-flex items-center gap-1 group/link"
            >
              {/* You can use CodeBracketIcon or a custom GitHub SVG/PNG */}
              {/* <CodeBracketIcon className="w-4 h-4" /> */}
              <Image src="/github.png" alt="GitHub" width={14} height={14} className="opacity-70 group-hover/link:opacity-100" />
              Source Code
              <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  // Optional: Wrap with Tilt component if you want that effect
  // return <Tilt options={{ max: 8, perspective: 1000, scale: 1.01 }} className="group">{cardContent}</Tilt>;
  return <div className="group">{cardContent}</div>; // 'group' class for hover effects on children
};

export default ProjectCard;