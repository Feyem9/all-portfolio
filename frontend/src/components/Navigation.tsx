import React, { useState, useEffect } from 'react';
import { getAbout } from '../services/api';

interface AboutData {
  name: string;
  title: string;
  description: string;
  location: string;
  email: string;
  phone: string;
  cvUrl: string;
  status: string;
  formation: string;
}

const Navigation = () => {
  const [about, setAbout] = useState<AboutData | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    getAbout().then(response => setAbout(response.data));
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <nav>
      <div className="container">
        <div className="logo">
          {about ? getInitials(about.name) : 'CDF'}
        </div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li><a href="#home" onClick={closeMenu}>Accueil</a></li>
          <li><a href="#about" onClick={closeMenu}>À propos</a></li>
          <li><a href="#formation" onClick={closeMenu}>Formation</a></li>
          <li><a href="#experience" onClick={closeMenu}>Expérience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projets</a></li>
          <li><a href="#skills" onClick={closeMenu}>Compétences</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
