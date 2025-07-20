import React, { useEffect, useRef } from 'react';
import './PageStyles.css';
import Logo from '../assets/logo.png';
import ScrollArrow from '../components/ScrollArrow';

const Home = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="page-container">
      {/* Hero Gallery Section */}
      <section id="hero" className="hero hero--fullheight hero--gallery revealable" ref={addToRefs}>
        <div className="gallery gallery--fit gallery--dimmed">
          <div className="gallery__item">
            <div className="hero-image restaurant-interior">
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="hero-logo-container">
                    <img src={Logo} alt="Cresco" className="hero-logo" />
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="hero-subtitle">Fine Dining Experience</p>
                    <div className="mt-8">
                      <ScrollArrow targetSelector=".food-grid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DINER-Style Food Grid */}
      <section className="food-grid revealable" ref={addToRefs}>
        <div className="food-grid__container">
          <div className="food-grid__item revealable" ref={addToRefs}>
            <div className="food-grid__image dish-tuna"></div>
          </div>
          <div className="food-grid__item revealable" ref={addToRefs}>
            <div className="food-grid__image dish-cauliflower"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
