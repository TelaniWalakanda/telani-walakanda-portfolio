import React from 'react';
import './Experience.css';

const experiences = [
    {
        role: "Associate Software Engineer",
        company: "DxDy Digital",
        period: "Feb 2023 - Aug 2025",
        description: "Developed and maintained scalable full-stack applications across enterprise and healthcare domains, contributing to both frontend and backend delivery in Agile teams.",
        highlights: [
            "Next.js + NestJS + PostgreSQL full-stack development",
            "UK healthcare assessment platform delivery",
            "API integration and production deployments",
            "WordPress CMS solutions (PHP, Timber Twig)",
            "Cross-functional collaboration in Agile/Scrum"
        ]
    },
    {
        role: "Software Engineer Intern",
        company: "Adroitlogic",
        period: "Jun 2022 - Dec 2022",
        description: "Contributed to frontend and backend development for enterprise integration products, including secure B2B file exchange and internal support tooling.",
        highlights: [
            "Admin dashboard modules for Support Tracker",
            "AS2 and MFT Gateway implementation support",
            "Secure data transfer workflows",
            "Basic Authentication integration",
            "Angular, Spring Boot, Java, and Node.js"
        ]
    }
];

const Experience: React.FC = () => {
    return (
        <section className="experience section container" id="experience">
            <h2 className="section-title">Professional <span className="text-accent">Journey</span></h2>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <h3 className="timeline-role">{exp.role}</h3>
                                <span className="timeline-period">{exp.period}</span>
                            </div>
                            <h4 className="timeline-company">{exp.company}</h4>
                            <p className="timeline-description">{exp.description}</p>
                            <div className="timeline-highlights">
                                {exp.highlights.map((highlight, idx) => (
                                    <span key={idx} className="highlight-tag">{highlight}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
