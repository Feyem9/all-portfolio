import React, { useEffect, useCallback } from 'react';
import './styles.css';
import './styles/loading.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Formation from './components/Formation';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  // Memoized scroll handler for better performance
  const handleScroll = useCallback(() => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - 200) {
        current = section.getAttribute('id') || '';
      }
    });

    document.querySelectorAll('nav a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, []);

  useEffect(() => {
    // Smooth scroll handlers
    const smoothScrollAnchors = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (!href) return;
      
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    smoothScrollAnchors.forEach(anchor => {
      anchor.addEventListener('click', handleSmoothScroll);
    });

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    // Active nav link scroll handler
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      smoothScrollAnchors.forEach(anchor => {
        anchor.removeEventListener('click', handleSmoothScroll);
      });
      fadeElements.forEach(el => {
        observer.unobserve(el);
      });
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <ErrorBoundary>
      <div className="App">
        <Navigation />
        <Hero />
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Formation />
        </ErrorBoundary>
        <ErrorBoundary>
          <Experience />
        </ErrorBoundary>
        <ErrorBoundary>
          <Projects />
        </ErrorBoundary>
        <ErrorBoundary>
          <Skills />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
