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
        imageUrl: "/login.png",
        description:
        "Developed an intelligent chatbot using OpenAI, Firebase, and Node.js to assist university students with general inquiries, streamlining support and improving response times.",
        technologies: ["OpenAI API", "Node.js", "Firebase", "React", "NLP"],
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