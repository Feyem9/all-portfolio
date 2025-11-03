import React from 'react';
import { getProjects } from '../services/api';
import { useDataFetch } from '../hooks/useDataFetch';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  image: string;
}

const Projects = () => {
  const { data: projects, loading, error } = useDataFetch<ProjectItem[]>(getProjects);

  if (loading) {
    return (
      <section id="projects">
        <h2 className="section-title">Mes Projets</h2>
        <div className="loading-spinner">Chargement...</div>
      </section>
    );
  }

  if (error || !projects) {
    return (
      <section id="projects">
        <h2 className="section-title">Mes Projets</h2>
        <div className="error-message">
          {error?.message || 'Une erreur est survenue lors du chargement des projets'}
        </div>
      </section>
    );
  }

  return (
    <section id="projects">
      <h2 className="section-title">Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card fade-in">
            <div className="project-header">{project.image}</div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub</a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link live-link">Voir le site</a>
              </div>
            </div>
          </div>
        ))}

        {/* Placeholder projects */}
        <div className="project-placeholder fade-in">
          <div className="project-placeholder-content">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <h3>Projet à venir</h3>
            <p>Espace réservé pour votre prochain projet</p>
          </div>
        </div>

        <div className="project-placeholder fade-in">
          <div className="project-placeholder-content">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <h3>Projet à venir</h3>
            <p>Espace réservé pour votre prochain projet</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
