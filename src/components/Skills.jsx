import React from 'react';
import { Brain, Globe, Database, PenTool } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: 'AI & Machine Learning',
        icon: <Brain className="skill-icon ai" />,
        skills: ['Python', 'TensorFlow', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Generative AI']
    },
    {
        title: 'Web Development',
        icon: <Globe className="skill-icon web" />,
        skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Node.js']
    },
    {
        title: 'Databases & Backend',
        icon: <Database className="skill-icon db" />,
        skills: ['MySQL', 'Firebase', 'REST APIs', 'Python', 'PHP']
    },
    {
        title: 'Tools & Design',
        icon: <PenTool className="skill-icon tools" />,
        skills: ['Docker', 'VS Code', 'Git', 'GitHub', 'Linux']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section container">
            <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>

            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skill-card glass-card">
                        <div className="skill-header">
                            {category.icon}
                            <h3>{category.title}</h3>
                        </div>
                        <div className="skill-list">
                            {category.skills.map((skill, sIndex) => (
                                <span key={sIndex} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
