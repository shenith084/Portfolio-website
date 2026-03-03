import React, { useEffect, useRef } from 'react';
import { MapPin, GraduationCap, Briefcase, Heart } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import './About.css';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('in-view');
                    observer.disconnect(); // animate only once
                }
            },
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="about-section container" ref={sectionRef}>
            <h2 className="section-title about-animate delay-0">About <span className="gradient-text">Me</span></h2>

            <div className="about-content">
                <div className="about-image-container about-animate delay-1">
                    <div className="image-border"></div>
                    <img src={profileImg} alt="Shenith Chanidu" className="about-img" />
                </div>

                <div className="about-text">
                    <h3 className="about-subtitle about-animate delay-2">AI and Machine Learning Enthusiast</h3>
                    <p className="about-description about-animate delay-3">
                        I am a BICT (Hons) student at Rajarata University of Sri Lanka with a strong foundation in computer engineering and software development.
                        My passion lies in applying technical knowledge to solve real-world problems through innovative AI solutions.
                    </p>

                    <div className="about-info-grid">
                        <div className="info-item about-animate delay-4">
                            <MapPin className="info-icon" />
                            <div>
                                <h4>Location</h4>
                                <p>Matara, Southern Province, Sri Lanka</p>
                            </div>
                        </div>

                        <div className="info-item about-animate delay-5">
                            <GraduationCap className="info-icon" />
                            <div>
                                <h4>Education</h4>
                                <p>BICT (Hons) - Final Year, Rajarata University</p>
                            </div>
                        </div>

                        <div className="info-item about-animate delay-6">
                            <Briefcase className="info-icon" />
                            <div>
                                <h4>Interests</h4>
                                <p>AI, ML &amp; Software Engineering</p>
                            </div>
                        </div>

                        <div className="info-item about-animate delay-7">
                            <Heart className="info-icon" />
                            <div>
                                <h4>Approach</h4>
                                <p>Quick learner &amp; Collaborative</p>
                            </div>
                        </div>
                    </div>

                    <div className="about-footer-text about-animate delay-8">
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

