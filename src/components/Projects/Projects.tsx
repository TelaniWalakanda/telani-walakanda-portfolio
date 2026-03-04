import React from 'react';

const projects = [
    {
        title: 'Project One',
        description: 'A cool project using React and TypeScript.',
        link: '#',
    },
    {
        title: 'Project Two',
        description: 'A scalable backend API with Node.js.',
        link: '#',
    },
    {
        title: 'Project Three',
        description: 'A beautiful UI built with Tailwind CSS.',
        link: '#',
    },
];

const Projects: React.FC = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-primary-light via-white to-accent-light animate-fade-in">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-accent">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <a
                        key={idx}
                        href={project.link}
                        className="block p-6 rounded-xl shadow-lg bg-white hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                        style={{ animationDelay: `${idx * 100}ms` }}
                    >
                        <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
                        <p className="text-gray-700">{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default Projects;
