import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Heart, Send, Loader2 } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <footer id="contact" className="contact-footer">
            <div className="container contact-container">
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
                            <div className="contact-method-item glass-card">
                                <MessageSquare className="method-icon" />
                                <div>
                                    <h4>Let's Chat</h4>
                                    <p>Available for consulting</p>
                                </div>
                            </div>
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

                <div className="footer-bottom">
                    <div className="footer-info">
                        <h3 className="brand-font">Shenith<span className="gradient-text">Chanidu</span></h3>
                        <p>BICT(Hons) Student & AI Enthusiast</p>
                        <p className="location">Matara, Sri Lanka</p>
                    </div>

                    <div className="footer-socials">
                        <a href="https://github.com/shenith084" target="_blank" rel="noreferrer" className="footer-social-link">
                            <Github size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/shenith-chanidu" target="_blank" rel="noreferrer" className="footer-social-link">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-copyright">
                    <p>
                        Developed with <Heart size={14} className="heart-icon" /> by <span className="gradient-text">Shenith Chanidu</span>
                    </p>
                    <p className="year">© {new Date().getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
