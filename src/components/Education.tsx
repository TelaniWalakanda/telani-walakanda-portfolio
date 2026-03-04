import React from 'react';
import './Education.css';

const Education: React.FC = () => {
    return (
        <section className="education section container" id="education">
            <h2 className="section-title">Academic &amp; <span className="text-accent">Leadership</span></h2>

            <div className="edu-grid">
                <div className="edu-card animate-fade-in">
                    <div className="edu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
                    </div>
                    <h3 className="edu-degree">B.Sc. (Hons) in Computer Science</h3>
                    <h4 className="edu-institution">University of Peradeniya</h4>
                    <p className="edu-description">
                        Graduated with a strong foundation in algorithms, data structures, and software engineering principles.
                    </p>
                </div>

                <div className="edu-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="edu-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </div>
                    <h3 className="edu-degree">Extracurricular Leadership</h3>
                    <h4 className="edu-institution">Various Roles</h4>
                    <ul className="edu-list">
                        <li><strong>Senior Prefect:</strong> Developed strong leadership and organizational skills managing school events.</li>
                        <li><strong>Computer Science Society:</strong> Active member contributing to technical workshops and peer mentoring.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Education;
