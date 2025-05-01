// src/components/ExperienceItem.tsx
import Image from "next/image";
import Link from "next/link"; // Use Next.js Link for internal/external links if needed
import { ArrowUpRightIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/20/solid"; // Import icons

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
        // Main container for one experience item - using Grid for layout
        <div className="grid grid-cols-[80px_auto_1fr] sm:grid-cols-[100px_auto_1fr] gap-x-4 md:gap-x-6 py-4">
        {/* --- Column 1: Date --- */}
        <div className="pt-0.5"> {/* Slight padding top to align better with title */}
            <p className="text-sm text-[color:var(--secondary-blue)] whitespace-nowrap">
            {date}
            </p>
        </div>

        {/* --- Column 2: Logo --- */}
        <div className="relative pl-5">
            {/* Optional: Add connector dot/line styling here if needed later */}
            <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutral-700/50 dark:bg-neutral-800/60 border border-neutral-600 dark:border-neutral-700 flex items-center justify-center">
                <Image
                    src={logo}
                    alt={alt}
                    width={24} // Adjust icon size within the circle
                    height={24}
                    className="object-contain" // Ensure logo fits well
                />
            </div>
        </div>


        {/* --- Column 3: Details --- */}
        <div className="flex flex-col gap-y-1.5 pt-px"> {/* pt-px for fine alignment */}
            {/* Title / Link */}
            <h3 className="text-base sm:text-lg font-semibold text-[color:var(--primary-blue)] flex items-center gap-1.5">
            {companyLink ? (
                <a
                href={companyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1.5 transition-colors hover:text-[color:var(--secondary-blue)]"
                >
                {title}
                <ArrowUpRightIcon className="w-4 h-4 inline-block opacity-70" />
                </a>
            ) : (
                title
            )}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base leading-relaxed text-[color:var(--foreground)] opacity-90">
            {description}
            </p>

            {/* Location Tag */}
            <div className="mt-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-neutral-700/50 dark:bg-neutral-800/60 text-[color:var(--secondary-blue)] border border-neutral-600 dark:border-neutral-700">
                <LocationIcon className="w-3 h-3" />
                {location} 
            </span>
            </div>
        </div>
        </div>
    );
};

export default ExperienceItem;