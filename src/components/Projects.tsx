import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "CBAT (UK Healthcare)",
        type: "Enterprise Application",
        description: "Full-stack ownership of an enterprise-level healthcare application. Implemented robust AWS SNS/SQS workflows and seamless NestJS with PostgreSQL integration.",
        techStack: ["Next.js", "NestJS", "PostgreSQL", "AWS SNS", "AWS SQS"],
        link: "#",
    },
    {
        title: "AS2 & MFT Gateway",
        type: "B2B Security Solution",
        description: "Developed a secure gateway for enterprise file exchange. Implemented S/MIME encryption, digital signing, and secure B2B protocols to ensure data integrity.",
        techStack: ["Java", "Spring Boot", "S/MIME", "Cryptography"],
        link: "#",
    },
    {
        title: "DxDy Official Website",
        type: "Corporate Portal",
        description: "Led the end-to-end technical implementation and production release of the official company portal, optimizing for performance and SEO.",
        techStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
        link: "#",
    }
];

const Projects: React.FC = () => {
    return (
        <section className="projects section container" id="projects">
            <h2 className="section-title">Featured <span className="text-accent">Projects</span></h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="project-content">
                            <span className="project-type">{project.type}</span>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech-stack">
                                {project.techStack.map((tech, idx) => (
                                    <span key={idx} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <a href={project.link} className="project-link" aria-label={`View ${project.title}`}>
                            View Details
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
