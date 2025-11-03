import React from 'react';
import { getContact } from '../services/api';
import { useDataFetch } from '../hooks/useDataFetch';

interface ContactData {
  email: string;
  location: string;
  availability: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    portfolio: string;
  };
}

const Contact = () => {
  const { data: contact, loading, error } = useDataFetch<ContactData>(getContact);

  if (loading) {
    return (
      <section id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="loading-spinner">Chargement...</div>
      </section>
    );
  }

  if (error || !contact) {
    return (
      <section id="contact">
        <h2 className="section-title">Contact</h2>
        <div className="error-message">
          {error?.message || 'Une erreur est survenue lors du chargement des informations de contact'}
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <strong>📧 Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="contact-item">
            <strong>📍 Localisation:</strong> {contact.location}
          </div>
          <div className="contact-item">
            <strong>⏰ Disponibilité:</strong> {contact.availability}
          </div>
        </div>

        <div className="social-links">
          <h3>Réseaux Sociaux</h3>
          <div className="social-grid">
            <a href={contact.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐙</span> GitHub
            </a>
            <a href={contact.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>💼</span> LinkedIn
            </a>
            <a href={contact.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🐦</span> Twitter
            </a>
            <a href={contact.social.portfolio} target="_blank" rel="noopener noreferrer" className="social-link">
              <span>🌐</span> Portfolio
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Envoyez-moi un message</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Votre message" rows={5} required></textarea>
            </div>
            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
