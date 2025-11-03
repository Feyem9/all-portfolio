import React from 'react';
import { getExperience } from '../services/api';
import { useDataFetch } from '../hooks/useDataFetch';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const { data: experiences, loading, error } = useDataFetch<ExperienceItem[]>(getExperience);

  if (loading) {
    return (
      <section id="experience">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="loading-spinner">Chargement...</div>
      </section>
    );
  }

  if (error || !experiences) {
    return (
      <section id="experience">
        <h2 className="section-title">Expérience Professionnelle</h2>
        <div className="error-message">
          {error?.message || 'Une erreur est survenue lors du chargement des expériences'}
        </div>
      </section>
    );
  }

  return (
    <section id="experience">
      <h2 className="section-title">Expérience Professionnelle</h2>
      <div className="experience-timeline">
        {experiences.map((exp) => (
          <div key={exp.id} className="experience-item fade-in">
            <div className="experience-header">
              <div>
                <div className="experience-title">{exp.title}</div>
                <div className="experience-company">{exp.company}</div>
              </div>
              <div className="experience-period">{exp.period}</div>
            </div>
            <p className="experience-description">{exp.description}</p>
            <div className="tech-tags">
              {exp.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
