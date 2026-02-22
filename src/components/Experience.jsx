import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: "Project Lead",
            organization: "ATIT Rajarata - Association of Technology IT",
            period: "Jul 2024 — Jan 2026",
            location: "Sri Lanka",
            description: "Spearheading technical projects and coordinating teams within the Association of Technology IT.",
            isCurrent: true
        },
        {
            title: "Project Lead",
            organization: "Robotic Society Of Technology",
            period: "Aug 2024 — Mar 2025",
            location: "Sri Lanka",
            description: "Leading robotics initiatives and managing project lifecycles for the Robotic Society of Technology.",
            isCurrent: false
        },
        {
            title: "Member",
            organization: "ATIT Rajarata - Association of Technology IT",
            period: "Jul 2023 — Jul 2024",
            location: "Sri Lanka",
            description: "Active contribution to community tech events and collaborative development projects.",
            isCurrent: false
        }
    ];

    return (
        <section id="experience" className="experience-section container">
            <h2 className="section-title">Exp<span className="gradient-text">erience</span></h2>
            <p className="section-subtitle">My professional journey</p>

            <div className="timeline">
                <div className="timeline-line"></div>
                {experiences.map((exp, index) => (
                    <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-dot">
                            <Briefcase size={18} />
                        </div>
                        <div className="timeline-content glass-card">
                            {exp.isCurrent && <span className="current-badge">CURRENT</span>}
                            <h3 className="exp-title">{exp.title}</h3>
                            <h4 className="exp-org">{exp.organization}</h4>

                            <div className="exp-meta">
                                <div className="meta-item">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                                <div className="meta-item">
                                    <MapPin size={14} />
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            <p className="exp-desc">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
