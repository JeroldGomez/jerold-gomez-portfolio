export type Project = {
    title: string;
    imageUrl: string;
    description: string;
    technologies: string[];
    liveLink: string | null;
    githubLink: string;
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
        title: "E-commerce Analytics Dashboard",
        imageUrl: "/projects/dashboard-mockup.png",
        description:
        "Designed and built an interactive dashboard for an e-commerce client to visualize sales trends, customer behavior, and inventory levels, enabling data-driven decision-making.",
        technologies: ["Python (Pandas, Plotly)", "SQL", "Tableau", "React"],
        liveLink: null,
        githubLink: "https://github.com/yourusername/ecommerce-dashboard",
    },
    {
        title: "Personal Portfolio Website",
        imageUrl: "/projects/portfolio-mockup.png",
        description:
        "This very portfolio! Built with Next.js, Tailwind CSS, and showcasing a blend of data science projects and my journey in tech. Features an animated ASCII background.",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Canvas API"],
        liveLink: "/",
        githubLink: "https://github.com/yourusername/my-portfolio",
    },
    {
        title: "Personal Portfolio Website",
        imageUrl: "/projects/portfolio-mockup.png",
        description:
        "This very portfolio! Built with Next.js, Tailwind CSS, and showcasing a blend of data science projects and my journey in tech. Features an animated ASCII background.",
        technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Canvas API"],
        liveLink: "/",
        githubLink: "https://github.com/yourusername/my-portfolio",
    },
]; 