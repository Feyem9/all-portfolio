import React from 'react';
import { getFormation } from '../services/api';
import { useDataFetch } from '../hooks/useDataFetch';

interface FormationItem {
  id: number;
  title: string;
  school: string;
  year: string;
  icon: string;
}

const Formation = () => {
  const { data: formations, loading, error } = useDataFetch<FormationItem[]>(getFormation);
  
  // Effet pour animer les éléments fade-in quand ils deviennent visibles
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, [formations]); // Réexécuter quand les formations changent

  if (loading) {
    return (
      <section id="formation">
        <h2 className="section-title">Formation & Certifications</h2>
        <div className="loading-spinner">Chargement...</div>
      </section>
    );
  }

  if (error || !formations) {
    return (
      <section id="formation">
        <h2 className="section-title">Formation & Certifications</h2>
        <div className="error-message">
          {error?.message || 'Une erreur est survenue lors du chargement des formations'}
        </div>
      </section>
    );
  }

  return (
    <section id="formation">
      <h2 className="section-title">Formation & Certifications</h2>
      <div className="formation-grid">
        {formations.map((formation) => (
          <div key={formation.id} className="formation-card fade-in">
            <div className="formation-icon" role="img" aria-label={`Icône ${formation.title}`}>
              {formation.icon}
            </div>
            <div className="formation-content">
              <h3 className="formation-title">{formation.title}</h3>
              <div className="formation-school">{formation.school}</div>
              <div className="formation-year">{formation.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Formation;
