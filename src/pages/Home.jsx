import React, { useEffect, useRef } from 'react';
import Logo from '../assets/logo.png';
import ScrollArrow from '../components/ScrollArrow';
import dish1 from '../assets/dish1.jpg';
import dish2 from '../assets/dish2.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

// Add reveal animation styles
const revealStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .revealable {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  }
  
  .revealable.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  .revealable:nth-child(1) { animation-delay: 0.3s; }
  .revealable:nth-child(2) { animation-delay: 0.6s; }
  .revealable:nth-child(3) { animation-delay: 0.9s; }
  .revealable:nth-child(4) { animation-delay: 1.2s; }
  .revealable:nth-child(5) { animation-delay: 1.5s; }
  .revealable:nth-child(6) { animation-delay: 1.8s; }
`;

const Home = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    // Add reveal styles to head
    const styleElement = document.createElement('style');
    styleElement.textContent = revealStyles;
    document.head.appendChild(styleElement);
    
    // Set up intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add staggered delay based on element's position
          const index = Array.from(entry.target.parentNode.children).indexOf(entry.target);
          entry.target.style.animationDelay = `${index * 0.3}s`;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all revealable elements
    const revealElements = document.querySelectorAll('.revealable');
    revealElements.forEach((element, index) => {
      // Add staggered delay for initial setup
      element.style.animationDelay = `${index * 0.3}s`;
      observer.observe(element);
    });
    
    // Store elements in refs for cleanup
    revealRefs.current = Array.from(revealElements);

    // Cleanup
    return () => {
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Hero Gallery Section */}
      <section 
        id="hero" 
        className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 w-full h-full">
          <div 
            ref={addToRefs}
            className="w-full h-full bg-cover bg-center bg-no-repeat opacity-0 transition-opacity duration-1000"
            style={{ 
              backgroundImage: "url('/src/assets/hero.png')",
              animation: 'fadeIn 1s ease-out forwards'
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-10 flex items-center justify-center">
              <div className="text-center z-20 revealable" ref={addToRefs}>
                <div className="mb-6 revealable" ref={addToRefs}>
                  <img 
                    src={Logo} 
                    alt="Cresco" 
                    className="max-w-[400px] w-full h-auto mx-auto drop-shadow-md revealable"
                    ref={addToRefs}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-xl md:text-2xl font-light tracking-wider mb-8 revealable" ref={addToRefs}>
                    Fine Dining Experience
                  </p>
                  <div className="mt-8 revealable" ref={addToRefs}>
                    <ScrollArrow targetSelector="#food-grid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Food Grid Section */}
      <section 
        id="food-grid"
        className="bg-black"
      >
        <div className="w-full p-2">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
            {/* First Row - Dish 1 (spans 4 columns) */}
            <div className="lg:col-span-4 revealable p-2" ref={addToRefs}>
              <img 
                src={dish1} 
                alt="Dish 1" 
                className="w-full h-[500px] object-cover transition-all duration-300 hover:scale-102"
              />
            </div>
            
            {/* First Row - Dish 2 (spans 2 columns) */}
            <div className="lg:col-span-2 revealable p-2" ref={addToRefs}>
              <img 
                src={dish2} 
                alt="Dish 2" 
                className="w-full h-[500px] object-cover transition-all duration-300 hover:scale-102"
              />
            </div>
            
            {/* Second Row - img1 (spans 2 columns) */}
            <div className="lg:col-span-2 revealable p-2" ref={addToRefs}>
              <img 
                src={img1} 
                alt="Image 1" 
                className="w-full h-[500px] object-cover transition-all duration-300 hover:scale-102"
              />
            </div>
            
            {/* Second Row - img2 (spans 4 columns) */}
            <div className="lg:col-span-4 revealable p-2" ref={addToRefs}>
              <img 
                src={img2} 
                alt="Image 2" 
                className="w-full h-[500px] object-cover transition-all duration-300 hover:scale-102"
              />
            </div>
          </div>
          
          {/* Full-width image below grid */}
          <div className="w-full mt-1 revealable" ref={addToRefs}>
            <img 
              src={img3} 
              alt="Restaurant Interior" 
              className="w-full h-auto object-cover transition-all duration-300 hover:scale-102"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;