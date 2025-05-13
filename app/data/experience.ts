export type Experience = {
    date: string;
    logo: string;
    alt: string;
    title: string;
    companyLink: string;
    description: string;
    location: string;
    locationType: "office" | "remote";
};

export const workExperience: Experience[] = [
    {
        date: "Aug - Sep, 2024",
        logo: "/cct_logo_t_main.svg",
        alt: "Company A Logo",
        title: "Data Analyst Intern · CCT",
        companyLink: "https://example.com/companya",
        description: `Enhanced data integrity and operational efficiency by cleaning and processing large enrollment/academic datasets using Google Sheets. Developed interactive Power BI dashboards, transforming complex data into actionable insights that supported institutional decision-making.

        Contributed to a smoother onboarding experience by improving data capture processes for incoming freshmen and provided crucial systems support to maintain office productivity.`,
        location: "Tagaytay City, Cavite",
        locationType: "office",
    },
    {
        date: "2023 - 2024",
        logo: "/cct_logo_t_main.svg",
        alt: "University Logo",
        title: "Junior IT Analyst · CCT",
        companyLink: "https://example.edu/ai-lab",
        description: `Contributed to seamless IT infrastructure operations and strategic reporting. Spearheaded the creation of comprehensive reports on initiatives, projects, and achievements, delivering actionable insights that fostered informed decision-making by leadership.`,
        location: "Tagaytay City, Cavite",
        locationType: "office"
    },
]; 