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

        Engineered a data cleaning and validation pipeline in Google Sheets for a large, complex dataset, ensuring 100% data integrity for the analysis. 

        Performed in-depth statistical analysis to identify key trends, including enrollment numbers per course, gender distribution within programs, the geographic breakdown of students, and the ratio of new freshmen to transferees. 

        Architected and developed a dynamic, interactive dashboard in Power BI, which provided the management with an at-a-glance view of the student landscape, replacing hours of manual reporting and analysis that directly supported data-driven decisions on our institution
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