import React from 'react';

const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 80 },
    { name: 'Cloud', level: 70 },
];

const Skills: React.FC = () => (
    <section className="py-20 px-4 bg-white dark:bg-primary-dark text-primary-dark dark:text-white animate-fade-in">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-accent">Skills</h2>
            <div className="space-y-6">
                {skills.map((skill, idx) => (
                    <div key={idx} className="w-full">
                        <div className="flex justify-between mb-1">
                            <span className="font-medium text-primary">{skill.name}</span>
                            <span className="text-sm text-accent">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-primary-light rounded-full h-3 dark:bg-primary">
                            <div
                                className="h-3 rounded-full bg-accent transition-all duration-700 animate-progress"
                                style={{ width: `${skill.level}%`, animationDelay: `${idx * 100}ms` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
