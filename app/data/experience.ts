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
        title: "Data Analyst Intern · City College of Tagaytay",
        companyLink: "",
        description: `Led the end-to-end analysis of the annual student enrollment data to provide strategic insights for the upcoming academic year. 

        Engineered an automated ETL pipeline using Excel Power Query to consolidate, clean, and validate raw data from a folder of system-generated files, ensuring 100% data integrity. 

        Connected the validated data model to Power BI to architect and develop a dynamic, interactive dashboard that replaced hours of manual reporting. 

        Utilized the dashboard to perform and present in-depth statistical analyses, identifying key trends in enrollment numbers per course, student demographics, geographic distribution, and the ratio of new freshmen to transferees, which directly supported data-driven decisions on our institution.
`,
        location: "Tagaytay City, Cavite",
        locationType: "office",
    },
    {
        date: "2023 - 2024",
        logo: "/cct_logo_t_main.svg",
        alt: "University Logo",
        title: "Junior IT Analyst · City College of Tagaytay",
        companyLink: "",
        description: `Contributed to seamless IT infrastructure operations and strategic reporting. Spearheaded the creation of comprehensive reports on initiatives, projects, and achievements, delivering actionable insights that fostered informed decision-making by leadership.`,
        location: "Tagaytay City, Cavite",
        locationType: "office"
    },
]; 