import React from 'react';

const Contact: React.FC = () => (
    <section className="py-20 px-4 bg-gradient-to-br from-accent-light via-white to-primary-light animate-fade-in">
        <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-accent">Contact</h2>
            <form className="space-y-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded bg-white border border-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded bg-white border border-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <textarea
                    placeholder="Your Message"
                    className="w-full p-3 rounded bg-white border border-primary-light focus:outline-none focus:ring-2 focus:ring-accent"
                    rows={5}
                />
                <button
                    type="submit"
                    className="px-6 py-3 rounded bg-accent text-white font-semibold hover:bg-primary transition-all duration-300"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
);

export default Contact;
