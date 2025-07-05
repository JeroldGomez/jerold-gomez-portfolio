export type Project = {
    title: string;
    imageUrl: string;
    description: string;
    technologies: string[];
    liveLink?: string | null;
    githubLink?: string | null;
};

export const projectsData: Project[] = [
    {
        title: "AI-Powered Student Chatbot",
        imageUrl: "/openai-thesis.svg",
        description: `Our thesis project introduces an innovative AI-powered chatbot system designed to enhance student support services at the Office of Student Empowerment and Support (OSES) of City College of Tagaytay. This intelligent system aims to provide real-time responses to common student inquiries.

        Integrated with Facebook Messenger and Gmail, the chatbot utilizes GPT-4o mini to deliver personalized and multilingual support anytime, even outside office hours.`,
        technologies: ["OpenAI API", "Javascript", "Firebase", "Botpress.com", "Make.com"],
        liveLink: "https://drive.google.com/drive/folders/1Bbxja24-2hr59Pn7o6PyY4moXWz-5TBc?usp=sharing",
        githubLink: null,
    },
    {
        title: "E-commerce Website Optimization Analysis",
        imageUrl: "/Google_c.svg",
        description:
        `As part of my Google Data Analytics Professional Certificate, I conducted a comprehensive case study focused on optimizing conversion rates for an e-commerce website using a large real-world dataset (170K+ records) from Kaggle.

        Using R (tidyverse, janitor) for data cleaning and analysis, and Tableau for visualization, I explored user behavior across various dimensions: demographics, traffic sources, and membership status.`,
        technologies: ["R","RStudio", "Tableau"],
        liveLink: null,
        githubLink: "https://github.com/JeroldGomez/e-commerce-website-optimization-analysis",
    },
    {
        title: "Amazon Fine Food Review Sentiment Analysis",
        imageUrl: "/amazon2.png",
        description:
        `Performing sentiment analysis on over 500,000 Amazon food reviews using two NLP approaches: VADER and the RoBERTa pre-trained transformer model. 

        I used Python (Pandas, NumPy) for data processing and manipulation; NLTK for VADER sentiment analysis; the Hugging Face transformers library for RoBERTa-based sentiment modeling; scipy.special for probability calculations (softmax); tqdm for efficient progress tracking; and Matplotlib and Seaborn for data visualization and model comparison.`,
        technologies: ["Python (Pandas, NumPy)", "NLTK", "Hugging Face Transformers", "Matplotlib ", "Seaborn"],
        liveLink: null,
        githubLink: "https://github.com/JeroldGomez/amazon-fine-food-reviews-sentiment-analysis",
    },
    {
        title: "E-Commerce Laptop Price Comparison Web Scraping",
        imageUrl: "/code_2.svg",
        description:
        `Developed a Python-based web scraper to collect and compare laptop prices from Amazon. 

        The script utilizes requests-html to handle JavaScript-rendered pages and extracts key product details including title, brand, price, and unique identifiers (ASINs). The collected data is then structured and organized into a Pandas DataFrame for further analysis and potential export. This project showcases skills in web scraping, data extraction, and data manipulation.`,
        technologies: ["Python (Pandas)", "Requests-html"],
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
        technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Canvas API", "Framer Motion"],
        liveLink: null,
        githubLink: "https://github.com/JeroldGomez/jerold-gomez-portfolio",
    },
]; 