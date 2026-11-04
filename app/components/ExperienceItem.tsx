'use client';

import Image from "next/image";
import { ArrowUpRightIcon, MapPinIcon, GlobeAltIcon } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import { Tilt_Neon } from "next/font/google";

interface ExperienceItemProps {
    date: string;
    logo: string;
    alt: string;
    role: string;
    company: string;
    companyLink?: string;
    description: string;
    location: string;
    locationType: "office" | "remote";
    skills?: string[];
    isCurrent?: boolean;
    isLast?: boolean;
    liteMotion?: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
    date,
    logo,
    alt,
    role,
    company,
    companyLink,
    description,
    location,
    locationType,
    skills = [],
    isCurrent = false,
    isLast = false,
    liteMotion = false,
}) => {
    const LocationIcon = locationType === "office" ? MapPinIcon : GlobeAltIcon;
    const highlights = description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

    const companyLabel = companyLink ? (
        <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#c4c4c4] hover:text-white transition-colors duration-200"
        >
            {company}
            <ArrowUpRightIcon className="w-3.5 h-3.5 opacity-70" />
        </a>
    ) : (
        <span className="text-[#c4c4c4]">{company}</span>
    );

    const content = (
        <Tilt
            className="tilt-container overflow-hidden rounded-lg"
            perspective={1000}
            glareEnable={true}
            glareMaxOpacity={0.0}
            glarePosition="all"
            scale={1.017}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            transitionSpeed={1000}
        >

        <article
            className={`relative rounded-2xl border bg-[#111111] px-4 py-4 sm:px-5 sm:py-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] ${
                isCurrent
                    ? "border-white/10"
                    : "border-white/10"
            } md:hover:border-white/20 md:transition-colors md:duration-200`}
        >
           
            <div className="flex items-start gap-3 sm:gap-4">
                <div className="h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center">
                    <Image
                        src={logo}
                        alt={alt}
                        width={28}
                        height={28}
                    />
                </div>

                <div className="min-w-0 flex-1 space-y-3">
                    <div className="min-w-0 space-y-1">
                        <h3 className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] sm:text-lg font-semibold text-white leading-snug font-[family-name:var(--font-geist-sans)]">
                            {role}
                            {/* {isCurrent && (
                                <span className="shrink-0 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-cyan-300 font-[family-name:var(--font-geist-mono)]">
                                    Now
                                </span>
                            )} */}
                        </h3>
                        <p className="text-sm font-[family-name:var(--font-geist-sans)]">
                            {companyLabel}
                        </p>
                    </div>

                    <p className="sm:hidden text-[11px] text-[#929DA7] font-[family-name:var(--font-geist-mono)]">
                        {date}
                    </p>

                    {highlights.length > 0 && (
                        <ul className="space-y-2">
                            {highlights.map((item) => (
                                <li
                                    key={item}
                                    className="grid grid-cols-[10px_1fr] gap-2 text-sm leading-relaxed text-[#c4c4c4] font-[family-name:var(--font-geist-sans)]"
                                >
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400/70" aria-hidden />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-[11px] font-[family-name:var(--font-geist-mono)] text-[#d4d4d4] border border-white/10 rounded-full px-2.5 py-1"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-x-2 pt-1 text-[11px] leading-5 text-[#929DA7] font-[family-name:var(--font-geist-sans)]">
                        <span className="inline-flex items-start gap-1.5 min-w-0">
                            <LocationIcon className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[color:var(--secondary-blue)]" />
                            <span className="break-words">{location}</span>
                        </span>
                        <span className="pl-[22px] sm:pl-0 font-[family-name:var(--font-geist-mono)]">
                            {locationType === "remote" ? "Remote" : "On-site"}
                        </span>
                    </div>
                </div>
            </div>
            
            
        </article>
        </Tilt>
    );

    return (
        <li className="relative grid grid-cols-[1.75rem_minmax(0,1fr)] sm:grid-cols-[10rem_1.75rem_minmax(0,1fr)] gap-x-3 sm:gap-x-4">
            <time className="hidden sm:block pt-5 text-right text-[11px] leading-5 text-[#929DA7] font-[family-name:var(--font-geist-mono)] whitespace-nowrap">
                {date}
            </time>

            <div className="relative flex justify-center" aria-hidden>
                <span
                    className={`absolute top-6 bottom-[-1.5rem] w-px ${
                        isLast
                            ? "bg-gradient-to-b from-white/15 to-transparent"
                            : "bg-white/12"
                    }`}
                />
                <span
                    className={`relative z-10 mt-[1.35rem] h-2.5 w-2.5 rounded-full border ${
                        isCurrent
                            ? "border-cyan-300 bg-cyan-300"
                            : "border-white/35 bg-[#0a0a0a]"
                    }`}
                />
                {isCurrent && (
                    <span className="experience-now-ring absolute z-0 mt-[1.05rem] h-5 w-5 rounded-full border border-cyan-300/40" />
                )}
            </div>

            <div className="min-w-0 pb-6 sm:pb-8">
                {liteMotion ? (
                    content
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.32, ease: "easeOut" }}
                    >
                        {content}
                    </motion.div>
                )}
            </div>
        </li>
    );
};

export default ExperienceItem;
