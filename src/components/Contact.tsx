import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch('https://formsubmit.co/ajax/wkitelani@gmail.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
            } else {
                const data = await response.json();
                console.error('FormSubmit Error:', data);
                setStatus('error');
            }
        } catch (error) {
            console.error('Fetch Error:', error);
            setStatus('error');
        }

        // Reset status after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
    };

    return (
        <section className="contact section container" id="contact">
            <div className="contact-wrapper">
                <div className="contact-info animate-fade-in">
                    <h2 className="section-title" style={{ textAlign: 'left' }}>Let's <span className="text-accent">Connect</span></h2>
                    <p className="contact-description">
                        I'm currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-details">
                        <a href="mailto:wkitelani@gmail.com" className="contact-method">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                            </div>
                            <div className="contact-text">
                                <span className="contact-label">Email</span>
                                <span className="contact-value">wkitelani@gmail.com</span>
                            </div>
                        </a>

                        <a href="tel:+94768694034" className="contact-method">
                            <div className="contact-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </div>
                            <div className="contact-text">
                                <span className="contact-label">Phone</span>
                                <span className="contact-value">+94 768 694 034</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-form-container animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="hidden" name="_subject" value="New message from your portfolio!" />
                        <input type="hidden" name="_captcha" value="false" />
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" id="name" name="name" className="form-input" placeholder="John Doe" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-input" placeholder="john@example.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea id="message" name="message" className="form-textarea" placeholder="Hello Telani..." rows={5} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary form-submit" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="form-status success" style={{ marginTop: '1rem', color: '#4caf50', textAlign: 'center', fontSize: '0.9rem' }}>
                                Message sent successfully! I will get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="form-status error" style={{ marginTop: '1rem', color: '#f44336', textAlign: 'center', fontSize: '0.9rem' }}>
                                Failed to send message. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
