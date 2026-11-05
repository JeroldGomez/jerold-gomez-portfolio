export type Experience = {
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
};

export const workExperience: Experience[] = [
    {
        date: "Oct 2025 — Present",
        logo: "/zuellig_svg.svg",
        alt: "Zuellig Pharma Logo",
        role: "CRM & Sales Data Analyst",
        company: "Zuellig Pharma",
        companyLink: "",
        description: ``,
        location: "Taguig, National Capital Region, Philippines",
        locationType: "office",
        skills: ["Python","Polars","ETL","Business Intelligence (BI)","KPI Analytics", "Sales Operations", "Data Wrangling", "Data Modeling","Data Analysis"],
    },
    {
        date: "Aug — Sep 2024",
        logo: "/cct_logo_t_main.svg",
        alt: "City College of Tagaytay Logo",
        role: "Data Analyst Intern",
        company: "City College of Tagaytay",
        companyLink: "",
        description: `Led the end-to-end analysis of the annual student enrollment data to provide strategic insights for the upcoming academic year.

Engineered an automated ETL pipeline using Excel Power Query to consolidate, clean, and validate raw data from a folder of system-generated files, ensuring 100% data integrity.

Connected the validated data model to Power BI to architect and develop a dynamic, interactive dashboard that replaced hours of manual reporting.

Utilized the dashboard to perform and present in-depth statistical analyses, identifying key trends in enrollment numbers per course, student demographics, geographic distribution, and the ratio of new freshmen to transferees, which directly supported data-driven decisions on our institution.
`,
        location: "Tagaytay City, Cavite",
        locationType: "office",
        skills: ["Power Query", "Power BI", "ETL", "Excel", "Statistical Analysis"],
    },
];
