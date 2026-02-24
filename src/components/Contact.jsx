import React, { useState, useRef } from 'react';
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Using environment variables for better security and easier configuration
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        // Create a formatted timestamp
        const now = new Date();
        const timeString = now.toLocaleString('en-US', {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        const templateParams = {
            name: form.current.name.value,
            email: form.current.email.value,
            message: form.current.message.value,
            time: timeString
        };

        emailjs.send(serviceID, templateID, templateParams, publicKey)
            .then((result) => {
                console.log(result.text);
                setIsSubmitting(false);
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 5000);
                form.current.reset(); // Reset the form
            }, (error) => {
                console.log(error.text);
                setIsSubmitting(false);
                alert("Failed to send message. Please check the console for details.");
            });
    };

    return (
        <footer id="contact" className="contact-footer">
            <div className="container contact-container">
                {/* Contact Form Section */}
                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2 className="cta-title">Let's work <span className="gradient-text">together</span></h2>
                        <p className="cta-desc">
                            I'm currently looking for internship and entry-level opportunities in AI Engineering, Data Science, and Software Development.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:shenith222@gmail.com" className="contact-method-item glass-card">
                                <Mail className="method-icon" />
                                <div>
                                    <h4>Email Me</h4>
                                    <p>shenith222@gmail.com</p>
                                </div>
                            </a>
                            <a href="https://github.com/shenith084" target="_blank" rel="noreferrer" className="contact-method-item glass-card">
                                <Github className="method-icon" />
                                <div>
                                    <h4>GitHub</h4>
                                    <p>github.com/shenith084</p>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/shenith-chanidu" target="_blank" rel="noreferrer" className="contact-method-item glass-card">
                                <Linkedin className="method-icon" />
                                <div>
                                    <h4>LinkedIn</h4>
                                    <p>linkedin.com/in/shenith-chanidu</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-panel glass-card">
                        <form ref={form} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" placeholder="your@gmail.com" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="4" placeholder="type message" required></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn-primary submit-btn ${isSubmitted ? 'success' : ''}`}
                                disabled={isSubmitting || isSubmitted}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="animate-spin" size={20} /> Sending...</>
                                ) : isSubmitted ? (
                                    <><CheckCircle size={20} /> Message Sent!</>
                                ) : (
                                    <><Send size={20} /> Send Message</>
                                )}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Simplified Minimalist Footer */}
                <div className="minimal-footer">
                    <div className="footer-brand-simple">
                        <div className="footer-logo">
                            <img src="/logo.svg" alt="SC Logo" className="logo-img" />
                            <span className="brand-font">S<span className="gradient-text">C</span></span>
                        </div>
                        <h3 className="brand-name-simple">Shenith Chanidu</h3>
                    </div>

                    <div className="footer-social-circles">
                        <a href="https://github.com/shenith084" target="_blank" rel="noreferrer" className="social-circle">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/shenith-chanidu" target="_blank" rel="noreferrer" className="social-circle">
                            <Linkedin size={20} />
                        </a>
                    </div>

                    <p className="copyright-simple">
                        © {new Date().getFullYear()} Shenith Chanidu. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
