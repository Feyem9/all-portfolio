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

const Hero = () => {
  const [about, setAbout] = useState<AboutData | null>(null);

  useEffect(() => {
    getAbout().then(response => setAbout(response.data));
  }, []);

  if (!about) return <div>Loading...</div>;

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>{about.name}</h1>
        <p className="subtitle">{about.title}</p>
        <p className="tagline">« Transformons vos idées en expériences web mémorables »</p>
        <a href="#projects" className="cta-button">Voir mes projets</a>
      </div>
    </section>
  );
};

export default Hero;
