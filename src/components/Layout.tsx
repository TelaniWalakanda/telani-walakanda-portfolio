import React from 'react';
import '../globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="min-h-screen bg-gradient-to-br from-primary-light via-white to-accent-light">
        <header className="w-full py-6 px-8 flex justify-between items-center bg-white/80 shadow-md sticky top-0 z-50">
            <span className="text-2xl font-bold text-primary">Your Name</span>
            <nav className="space-x-6">
                <a href="#about" className="text-primary hover:text-accent transition">About</a>
                <a href="#projects" className="text-primary hover:text-accent transition">Projects</a>
                <a href="#skills" className="text-primary hover:text-accent transition">Skills</a>
                <a href="#contact" className="text-primary hover:text-accent transition">Contact</a>
            </nav>
        </header>
        <main>{children}</main>
        <footer className="w-full py-6 text-center text-primary-dark bg-white/80 mt-12">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
    </div>
);

export default Layout;
