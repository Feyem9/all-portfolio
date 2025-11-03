import React from 'react';
import { getAbout } from '../services/api';
import { useDataFetch } from '../hooks/useDataFetch';

interface AboutData {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
}

const About = () => {
  const { data: about, loading, error } = useDataFetch<AboutData>(getAbout);

  if (loading) {
    return (
      <section id="about">
        <div className="section-title">À propos</div>
        <div className="loading-spinner">Chargement...</div>
      </section>
    );
  }

  if (error || !about) {
    return (
      <section id="about">
        <div className="section-title">À propos</div>
        <div className="error-message">
          {error?.message || 'Une erreur est survenue lors du chargement des données'}
        </div>
      </section>
    );
  }

  return (
    <section id="about">
      <div className="section-title">À propos</div>
      <div className="about-content">
        <div className="profile-photo">
          <span>{about.name.split(' ').map((n: string) => n[0]).join('')}</span>
        </div>
        <div className="about-text">
          <h3>{about.name}</h3>
          <p>{about.title}</p>
          <p>{about.description}</p>
          <div className="info-grid">
            <div className="info-item">
              <strong>📍 Localisation:</strong> {about.location}
            </div>
            <div className="info-item">
              <strong>📧 Email:</strong> {about.email}
            </div>
            <div className="info-item">
              <strong>📱 Téléphone:</strong> {about.phone}
            </div>
          </div>
          <a href={about.cvUrl} className="download-cv" target="_blank" rel="noopener noreferrer">
            Télécharger CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
