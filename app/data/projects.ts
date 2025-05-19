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
        imageUrl: "/openai-thesis.svg",
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
        githubLink: "https://github.com/JeroldGomez/e-commerce-website-optimization-analysis",
    },
    {
        title: "Amazon Fine Food Review Sentiment Analysis",
        imageUrl: "/amazon2.png",
        description:
        "This project aims to perform sentiment analysis on a dataset of Amazon Fine Food Reviews using two different approaches: VADER sentiment analysis and the RoBERTa pretrained model. By comparing the results from these two methods, we gain insights into the differences and strengths of each approach in analyzing sentiment.",
        technologies: ["Python (Pandas, NumPy)", "NLTK", "Matplotlib ", "Seaborn"],
        liveLink: null,
        githubLink: "https://github.com/JeroldGomez/amazon-fine-food-reviews-sentiment-analysis",
    },
    {
        title: "E-Commerce Laptop Price Comparison Web Scraping",
        imageUrl: "/code_2.svg",
        description:
        "A Python project that scrapes laptop prices and details from Amazon. The script extracts essential information like product title, price, and brand, and stores it in a pandas DataFrame for easy comparison.",
        technologies: ["Python (Pandas)"],
        liveLink: null,
        githubLink: "https://github.com/JeroldGomez/e-commerce-laptop-price-comparison-web-scraping",
    },
    {
        title: "Coronavirus Data Exploration",
        imageUrl: "/coro.svg",
        description:
        "A data analysis and visualization project focused on understanding the spread, impact, and trends of COVID-19 using real-world datasets. The project demonstrates my ability to work with large, public health datasets and apply data science techniques to extract meaningful insights.",
        technologies: ["Excel", "SQL", "Tableau"],
        liveLink: null,
        githubLink: "https://github.com/JeroldGomez/coronavirus-data-exploration",
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