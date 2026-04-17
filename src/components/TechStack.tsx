import React from 'react';
import './TechStack.css';

const skills = {
    Languages: ["Java", "TypeScript", "JavaScript", "HTML/CSS", "SQL"],
    Frontend: ["React", "Next.js", "Angular 13", "Redux", "Tailwind CSS"],
    Backend: ["Node.js", "NestJS", "Spring Boot", "Java", "REST APIs"],
    "Cloud & Tools": ["AWS (EC2, S3, SNS, SQS)", "PostgreSQL", "Docker", "Git/GitHub", "Jira/Agile"]
};

const TechStack: React.FC = () => {
    return (
        <section className="tech-stack section container" id="skills">
            <h2 className="section-title">Technical <span className="text-accent">Arsenal</span></h2>
            <div className="grid tech-grid">
                {Object.entries(skills).map(([category, items], index) => (
                    <div key={category} className="tech-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="tech-card-header">
                            <h3 className="tech-category-title">{category}</h3>
                        </div>
                        <ul className="tech-list">
                            {items.map((skill) => (
                                <li key={skill} className="tech-item">
                                    <span className="tech-bullet"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TechStack;
