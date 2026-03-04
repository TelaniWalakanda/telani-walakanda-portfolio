import React from 'react';
import './Experience.css';

const experiences = [
    {
        role: "Associate Software Engineer",
        company: "DxDy Digital",
        period: "Feb 2024 - Present",
        description: "Developing scalable enterprise applications and leading technical implementations. Utilizing Next.js, React, NestJS, and AWS.",
        highlights: ["End-to-end technical leadership", "Production releases", "Cloud infrastructure optimization"]
    },
    {
        role: "Software Engineer",
        company: "DxDy Digital",
        period: "Nov 2022 - Feb 2024",
        description: "Built and maintained full-stack web applications. Key contributions to enterprise-grade UK/US projects focusing on performance and security.",
        highlights: ["Next.js/React frontend development", "Node.js RESTful APIs", "Database schema design (PostgreSQL)"]
    },
    {
        role: "Software Engineering Intern",
        company: "Adroitlogic",
        period: "Oct 2021 - Apr 2022",
        description: "Assisted in enterprise integration solutions. Gained hands-on experience with Java, Spring Boot, and B2B file exchange protocols.",
        highlights: ["API integration", "Unit testing", "Agile methodologies"]
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
