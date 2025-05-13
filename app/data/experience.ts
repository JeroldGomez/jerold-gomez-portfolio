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
        description:
        "Developed predictive models for customer churn, resulting in a 15% reduction. Built data pipelines using Python and Airflow to automate reporting processes, saving hundreds of hours.",
        location: "Tagaytay City, Cavite",
        locationType: "office",
    },
    {
        date: "2023 - 2024",
        logo: "/cct_logo_t_main.svg",
        alt: "University Logo",
        title: "Junior IT Analyst · CCT",
        companyLink: "https://example.edu/ai-lab",
        description:
        "Assisted senior researchers with data collection, cleaning, and analysis for machine learning projects. Co-authored a paper on natural language processing techniques presented at a regional conference.",
        location: "Remote",
        locationType: "remote",
    },
]; 