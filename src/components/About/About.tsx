import React from 'react';

const About: React.FC = () => (
    <section className="py-20 px-4 bg-white dark:bg-primary-dark text-primary-dark dark:text-white animate-fade-in">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-accent">About Me</h2>
            <p className="text-lg leading-relaxed">
                I am a passionate software engineer with experience in building modern web applications, solving complex problems, and learning new technologies. I love working with React, TypeScript, and cloud-native tools.
            </p>
        </div>
    </section>
);

export default About;
