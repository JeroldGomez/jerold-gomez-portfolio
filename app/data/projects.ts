export type Project = {
    title: string;
    imageUrl: string;
    description: string;
    technologies: string[];
    liveLink?: string | null;
    githubLink?: string;
};

export const projectsData: Project[] = [
    {
        title: "AI-Powered Student Chatbot",
        imageUrl: "/thesis.png",
        description: `Our thesis project introduces an innovative AI-powered chatbot system designed to enhance student support services at the Office of Student Empowerment and Support (OSES) of City College of Tagaytay. This intelligent system aims to provide real-time responses to common student inquiries.

        Integrated with Facebook Messenger and Gmail, the chatbot utilizes GPT-4o mini to deliver personalized and multilingual support anytime, even outside office hours.`,
        technologies: ["OpenAI API", "Javascript", "Firebase", "Botpress.com", "Make.com"],
        liveLink: "#",
        githubLink: "https://github.com/yourusername/chatbot-project",
    },
    {
        title: "E-commerce Website Optimization Analysis",
        imageUrl: "/Google_c.svg",
        description:
        "As part of my Google Data Analytics Professional Certificate, I conducted a comprehensive case study focused on optimizing conversion rates for an e-commerce website. Using R (tidyverse, janitor) for data cleaning and analysis, and Tableau for visualization, I explored user behavior across various dimensions: demographics, traffic sources, and membership status.",
        technologies: ["R","RStudio", "Tableau"],
        liveLink: null,
        githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    },
    {
        title: "Amazon Fine Food Review Sentiment Analysis",
        imageUrl: "/amazon2.png",
        description:
        "This project aims to perform sentiment analysis on a dataset of Amazon Fine Food Reviews using two different approaches: VADER sentiment analysis and the RoBERTa pretrained model. By comparing the results from these two methods, we gain insights into the differences and strengths of each approach in analyzing sentiment.",
        technologies: ["Python (Pandas, NumPy)", "NLTK", "Matplotlib ", "Seaborn"],
        liveLink: null,
        githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    },
    {
        title: "Personal Portfolio Website",
        imageUrl: "/jb.png",
        description:
        "This very portfolio! Built with Next.js, Tailwind CSS, and showcasing a blend of data science projects and my journey in tech.",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Canvas API"],
        liveLink: "/",
        // githubLink: "https://github.com/yourusername/my-portfolio",
    },
]; 