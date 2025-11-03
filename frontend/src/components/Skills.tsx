import React from 'react';
import { getSkills } from '../services/api';
import { useDataFetch } from '../hooks/useDataFetch';

interface SkillCategory {
  id: number;
  category: string;
  skills: string[];
  level: string;
}

interface SoftSkill {
  id: number;
  skill: string;
  description: string;
}

interface SkillsData {
  technical: SkillCategory[];
  soft: SoftSkill[];
}

const Skills = () => {
  const { data: skills, loading, error } = useDataFetch<SkillsData>(getSkills);

  if (loading) {
    return (
      <section id="skills">
        <h2 className="section-title">Compétences Techniques</h2>
        <div className="loading-spinner">Chargement...</div>
      </section>
    );
  }

  if (error || !skills) {
    return (
      <section id="skills">
        <h2 className="section-title">Compétences Techniques</h2>
        <div className="error-message">
          {error?.message || 'Une erreur est survenue lors du chargement des compétences'}
        </div>
      </section>
    );
  }

  const getLevelClass = (level: string) => {
    switch (level) {
      case 'Expert': return 'level-expert';
      case 'Avancé': return 'level-advanced';
      case 'Intermédiaire': return 'level-intermediate';
      default: return '';
    }
  };

  return (
    <section id="skills">
      <h2 className="section-title">Compétences Techniques</h2>
      <div className="skills-container">
        {skills.technical.map((category) => (
          <div key={category.id} className="skill-category fade-in">
            <h3>💻 {category.category}</h3>
            <div className="skill-list">
              {category.skills.map((skill, i) => (
                <span key={i} className="skill-item">{skill}</span>
              ))}
            </div>
            <div className="skill-level">
              <span className={`level-badge ${getLevelClass(category.level)}`}>⚡ {category.level}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="section-title" style={{ marginTop: '4rem' }}>Soft Skills</h2>
      <div className="soft-skills-grid">
        {skills.soft.map((skill) => (
          <div key={skill.id} className="soft-skill-card fade-in">
            <h4>💬 {skill.skill}</h4>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
