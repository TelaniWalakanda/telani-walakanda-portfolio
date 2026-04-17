import React from 'react';
import './Projects.css';

const projects = [
    {
        title: "CBAT (UK Healthcare)",
        type: "Healthcare Assessment Platform",
        description: "Served as the main full-stack developer for 6 months, delivering complete features across frontend and backend with secure file handling and notification workflows.",
        techStack: ["Next.js", "Redux", "TypeScript", "Tailwind CSS", "NestJS", "TypeORM", "PostgreSQL", "AWS SNS", "AWS SQS", "AWS S3"],
        link: "",
    },
    {
        title: "DxDy Official Website",
        type: "Corporate Website",
        description: "Led end-to-end technical implementation from architecture setup to production release, including deployment lifecycle and environment configuration.",
        techStack: ["Next.js", "Redux", "TypeScript", "NestJS", "TypeORM", "PostgreSQL"],
        link: "",
    },
    {
        title: "AS2 & MFT Gateway",
        type: "Enterprise Secure File Exchange",
        description: "Contributed to protocol-based B2B integration with S/MIME encryption, digital signing, message validation, and secure authentication flows.",
        techStack: ["Angular 13", "Java", "Spring Boot", "Node.js", "BouncyCastle", "AWS", "DynamoDB", "Bitbucket"],
        link: "",
    },
    {
        title: "Support Tracker",
        type: "Customer Ticketing Platform",
        description: "Developed complete admin management modules and integrated frontend with backend systems, including secure real-time synchronization workflows.",
        techStack: ["Angular 13", "Material UI", "Java", "Spring Boot", "Firebase", "HTML5"],
        link: "",
    },
    {
        title: "Ayurdi Ayurveda",
        type: "Personal Production Project",
        description: "Designed and implemented a responsive production website with reusable components, scalable routing, and ongoing maintenance.",
        techStack: ["Next.js", "TypeScript", "NextUI", "Tailwind CSS", "Firebase"],
        link: "https://ayurdiayurveda.com",
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

                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View ${project.title}`}>
                                View Live Project
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        ) : (
                            <span className="project-link project-link-muted">Case Study Available On Request</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
