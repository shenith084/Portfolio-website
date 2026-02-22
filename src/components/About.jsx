import React from 'react';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section container">
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>

            <div className="about-content">
                <div className="about-image-container">
                    <div className="image-border"></div>
                    <div className="image-placeholder glass-card">
                        <span className="brand-font">SC</span>
                    </div>
                </div>

                <div className="about-text">
                    <h3 className="about-subtitle">AI and Machine Learning Enthusiast</h3>
                    <p className="about-description">
                        I am a BICT (Hons) student at Rajarata University of Sri Lanka with a strong foundation in computer engineering and software development.
                        My passion lies in applying technical knowledge to solve real-world problems through innovative AI solutions.
                    </p>

                    <div className="about-info-grid">
                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Matara, Southern Province, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <GraduationCap className="info-icon" />
                            <div>
                                <h4>Education</h4>
                                <p>BICT (Hons) - Final Year, Rajarata University</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Briefcase className="info-icon" />
                            <div>
                                <h4>Interests</h4>
                                <p>AI, ML & Software Engineering</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Heart className="info-icon" />
                            <div>
                                <h4>Approach</h4>
                                <p>Quick learner & Collaborative</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-footer-text">
                        I am always eager to take on new challenges in technology and open to opportunities in
                        <span className="pill">Software Development</span>,
                        <span className="pill">AI Engineering</span>, and
                        <span className="pill">Data Science</span> roles.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
