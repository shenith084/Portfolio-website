import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Heart, Send, Loader2, Flame } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <footer id="contact" className="contact-footer">
            <div className="container contact-container">
                {/* Contact Form Section (Keeping this as it was requested and liked previously) */}
                <div className="contact-grid">
                    <div className="contact-info-panel">
                        <h2 className="cta-title">Let's work <span className="gradient-text">together</span></h2>
                        <p className="cta-desc">
                            I'm currently looking for new opportunities in AI Engineering, Data Science, and Software Development.
                            If you have a project in mind or just want to say hi, feel free to reach out!
                        </p>

                        <div className="contact-methods">
                            <a href="mailto:shenithchanidu@example.com" className="contact-method-item glass-card">
                                <Mail className="method-icon" />
                                <div>
                                    <h4>Email Me</h4>
                                    <p>shenithchanidu@example.com</p>
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
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="John Doe" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" placeholder="john@example.com" required />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can I help you?" required></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn-primary submit-btn"
                                disabled={isSubmitting || isSubmitted}
                            >
                                {isSubmitting ? (
                                    <><Loader2 className="animate-spin" size={20} /> Sending...</>
                                ) : isSubmitted ? (
                                    "Message Sent!"
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
                        <Flame className="brand-icon-simple" fill="currentColor" />
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
