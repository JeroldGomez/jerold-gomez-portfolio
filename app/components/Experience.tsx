'use client';

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ExperienceItem from "./ExperienceItem";
import { workExperience } from "../data/experience";

function useLiteMotion() {
    const prefersReducedMotion = useReducedMotion();
    const [isLite, setIsLite] = useState(true);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 767px), (pointer: coarse)");
        const update = () => setIsLite(media.matches);
        update();
        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    return Boolean(prefersReducedMotion) || isLite;
}

const Experience = () => {
    const liteMotion = useLiteMotion();

    const heading = (
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-2 md:gap-0">
            <h2 className="text-[#fff] text-2xl font-semibold font-[family-name:var(--font-geist-sans)]">
                <span className="text-[13px] font-light font-[family-name:var(--font-geist-mono)] mr-2 opacity-70">
                    02.
                </span>
                Where I&apos;ve Worked
            </h2>
        </div>
    );

    return (
        <section className="flex flex-col" id="experience">
            {liteMotion ? (
                heading
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                >
                    {heading}
                </motion.div>
            )}

            <ol className="m-0 list-none p-0">
                {workExperience.map((exp, index) => (
                    <ExperienceItem
                        key={`${exp.company}-${exp.date}`}
                        date={exp.date}
                        logo={exp.logo}
                        alt={exp.alt}
                        role={exp.role}
                        company={exp.company}
                        companyLink={exp.companyLink}
                        description={exp.description}
                        location={exp.location}
                        locationType={exp.locationType}
                        skills={exp.skills}
                        isCurrent={index === 0}
                        isLast={index === workExperience.length - 1}
                        liteMotion={liteMotion}
                    />
                ))}
            </ol>
        </section>
    );
};

export default Experience;
