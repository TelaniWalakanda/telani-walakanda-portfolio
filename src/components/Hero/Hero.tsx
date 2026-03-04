import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-primary via-accent to-primary-dark">
            <div className="absolute inset-0 bg-[url('/vite.svg')] bg-no-repeat bg-center opacity-10 animate-parallax" />
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in-up">
                    Hi, I'm <span className="text-accent">Your Name</span>
                </h1>
                <p className="mt-6 text-xl md:text-2xl text-white/80 animate-fade-in-up delay-200">
                    Software Engineer & Problem Solver
                </p>
            </div>
        </section>
    );
};

export default Hero;
