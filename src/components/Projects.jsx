import React from 'react';
import { ExternalLink, Github, Monitor, Cpu, Server, Coffee, ShoppingBag } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        title: 'AI-Based Mango Disease Detection with Smart Chatbot',
        date: 'Jan 2025 – Sep 2025',
        description: 'Manglo — an AI-powered web application for accurate mango disease detection combined with an intelligent chatbot for farmer assistance. Uses deep learning to identify crop diseases from images.',
        tech: ['Python', 'TensorFlow', 'Computer Vision', 'NLP', 'Flask'],
        icon: <Cpu className="proj-icon ai" />,
        link: 'https://github.com/shenith084/Mango-Disease-Detection.git'
    },
    {
        title: 'Gas Leakage Detection System',
        date: 'May 2025',
        description: 'IoT-based Gas Leakage Detection & Weighing Cell System offering real-time monitoring, alerts, and operational control for residential, commercial, and industrial spaces using MQ2 sensor, load cell, and HX711 chip.',
        tech: ['Arduino', 'IoT', 'C++', 'MQ2 Sensor', 'HX711'],
        icon: <Monitor className="proj-icon iot" />,
        link: null
    },
    {
        title: 'Freelancer Platform – Job Posting & Finding',
        date: 'Jan 2024',
        description: 'Dynamic web platform enabling clients to post jobs and freelancers to discover matching opportunities. Features user registration, job posting, search, and dashboards with secure, scalable architecture.',
        tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML/CSS', 'Figma'],
        icon: <Server className="proj-icon web" />,
        link: 'https://github.com/shenith084/freelancer-project.git'
    },
    {
        title: 'Cafe Management System',
        date: 'Jan 2023',
        description: 'Web-based application to automate cafe operations including order management, billing, and inventory control with real-time reporting and secure role-based access for staff and administrators.',
        tech: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
        icon: <Coffee className="proj-icon cafe" />,
        link: 'https://github.com/shenith084/cafe-management-System.git'
    },
    {
        title: 'E-Commerce Website',
        date: 'Recent',
        description: 'A full-featured E-Commerce platform built with Laravel 11, designed with a modern UI, secure payment integration, and complete admin management. Features product browsing, cart, and PayHere integration.',
        tech: ['Laravel 11', 'PHP', 'MySQL', 'Blade', 'Tailwind CSS', 'PayHere'],
        icon: <ShoppingBag className="proj-icon shop" />,
        link: 'https://github.com/shenith084/E-Commerce-Website.git'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section container">
            <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`project-card glass-card ${project.link ? 'clickable-card' : ''}`}
                        onClick={() => project.link && window.open(project.link, '_blank', 'noreferrer')}
                    >
                        <div className="project-header">
                            <div className="project-icon-wrapper">
                                {project.icon}
                            </div>
                            <div className="project-title-area">
                                <h3>{project.title}</h3>
                                <span className="project-date">{project.date}</span>
                            </div>
                        </div>

                        <p className="project-desc">{project.description}</p>

                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-pill">{t}</span>
                            ))}
                        </div>

                        {project.link && (
                            <div className="project-links">
                                <a href={project.link} target="_blank" rel="noreferrer" className="proj-link">
                                    <Github size={18} /> <span>Source Code</span>
                                </a>
                                <a href={project.link} target="_blank" rel="noreferrer" className="proj-link secondary">
                                    <ExternalLink size={18} />
                                </a>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
