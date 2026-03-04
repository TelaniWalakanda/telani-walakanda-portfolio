import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <header className="navbar-container">
            <nav className="navbar container">
                <a href="#home" className="navbar-logo">
                    TW<span className="text-accent">.</span>
                </a>
                <ul className="navbar-links">
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#contact" className="btn btn-primary nav-cta">Contact Me</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
