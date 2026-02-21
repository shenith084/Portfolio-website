import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const [titleIndex, setTitleIndex] = useState(0);
    const titles = [
        'Software Developer',
        'AI/ML Engineer',
        'Data Scientist',
        'BICT Specialist'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="hero container">
            <div className="hero-content">
                <div className="hero-badge glass-card">
                    <span className="badge-dot"></span>
                    Available for new opportunities
                </div>

                <h1 className="hero-title">
                    Hi, I am <br />
                    <span className="gradient-text">Shenith Chanidu</span>
                </h1>

                <div className="hero-typing">
                    <span className="typing-static">I am a </span>
                    <span className="typing-dynamic">{titles[titleIndex]}</span>
                </div>

                <p className="hero-description">
                    Passionate about building AI-driven solutions and high-performance web applications.
                    Bridging the gap between complex data and intuitive user experiences.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn-primary flex-btn">
                        View My Work <ArrowRight size={18} />
                    </a>
                    <div className="hero-socials">
                        <a href="https://github.com/shenith084" target="_blank" rel="noreferrer" className="social-icon glass-card">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/shenith-chanidu" target="_blank" rel="noreferrer" className="social-icon glass-card">
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-visual">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
                <div className="visual-content glass-card">
                    <div className="code-header">
                        <div className="dot red"></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>
                    <div className="code-body">
                        <p><span className="keyword">const</span> <span className="variable">developer</span> = &#123;</p>
                        <p className="indent"><span className="property">name</span>: <span className="string">'Shenith Chanidu'</span>,</p>
                        <p className="indent"><span className="property">role</span>: <span className="string">'AI/ML Enthusiast'</span>,</p>
                        <p className="indent"><span className="property">location</span>: <span className="string">'Sri Lanka'</span>,</p>
                        <p className="indent"><span className="property">passion</span>: <span className="string">'Artificial Intelligence'</span></p>
                        <p>&#125;;</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
