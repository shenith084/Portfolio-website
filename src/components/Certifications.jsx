import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const certifications = [
    {
        title: "Deep Learning and Generative AI: Data Prep, Analysis, and Visualization with Python",
        issuer: "LinkedIn",
        date: "Feb 2026",
        icon: <Award size={20} />
    },
    {
        title: "What Is Generative AI?",
        issuer: "LinkedIn",
        date: "Feb 2026",
        icon: <Award size={20} />
    },
    {
        title: "AI/ML Engineer - Stage 2",
        issuer: "SLIIT",
        date: "Aug 2025",
        icon: <Award size={20} />
    },
    {
        title: "Full Stack Web Development",
        issuer: "Find X (PVT) LTD",
        date: "Dec 2025",
        icon: <Award size={20} />
    },
    {
        title: "Front-End Web Development",
        issuer: "University of Moratuwa",
        date: "Jul 2023",
        icon: <Award size={20} />
    },
    {
        title: "AI/ML Engineer - Stage 1",
        issuer: "SLIIT",
        date: "Jun 2023",
        icon: <Award size={20} />
    },
    {
        title: "Python Programming",
        issuer: "University of Moratuwa",
        date: "2023",
        icon: <Award size={20} />
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="certifications-section container">
            <h2 className="section-title">Certific<span className="gradient-text">ations</span></h2>
            <p className="section-subtitle">Professional growth & licenses</p>

            <div className="certs-grid">
                {certifications.map((cert, index) => (
                    <div key={index} className="cert-card glass-card">
                        <div className="cert-header">
                            <div className="cert-icon-container">
                                {cert.icon}
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">
                                    {cert.issuer} • <span className="cert-date">{cert.date}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
