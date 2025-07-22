import React, { useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import ScrollArrow from "../components/ScrollArrow";
import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import sectionImage from "../assets/p2.png";
import Navbar from "../components/Navbar";

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
    const styleElement = document.createElement("style");
    styleElement.textContent = revealStyles;
    document.head.appendChild(styleElement);

    // Set up intersection observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add staggered delay based on element's position
          const index = Array.from(entry.target.parentNode.children).indexOf(
            entry.target
          );
          entry.target.style.animationDelay = `${index * 0.3}s`;
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all revealable elements
    const revealElements = document.querySelectorAll(".revealable");
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
      <Navbar />

      {/* Virtual Tour Hero Section with Logo Overlay */}
      <section
        id="virtual-tour-hero"
        className="w-full min-h-screen bg-black flex items-center justify-center relative overflow-hidden p-0 m-0"
      >
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10 pointer-events-none">
          <img
            src={Logo}
            alt="Cresco"
            className="max-w-[400px] w-full h-auto mx-auto drop-shadow-md mb-6 mt-8"
            style={{ zIndex: 10, pointerEvents: "auto" }}
          />
          {/* ScrollArrow button placed directly below the logo */}
          <div className="w-full flex justify-center z-20 mt-4 pointer-events-auto">
            <ScrollArrow targetSelector="#food-grid" />
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center relative z-0">
          <iframe
            title="Cresco Restaurant Virtual Tour"
            src="https://www.google.com/maps?layer=c&cbll=50.1108104,8.678487&cbp=11,8.86,0,0,0&z=17&output=svembed"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              border: 0,
              borderRadius: "0",
              width: "100vw",
              height: "100vh",
              minHeight: "600px",
              maxHeight: "100vh",
              objectFit: "cover",
            }}
          ></iframe>
        </div>
      </section>

      {/* Section Image */}
      <section
        id="section-image"
        className="w-full bg-black revealable"
        ref={addToRefs}
      >
        <img
          src={sectionImage}
          alt="Special Section"
          className="w-full h-auto object-cover"
        />
      </section>
      {/* Removed as per instructions */}

      {/* Food Grid Section */}
      <section id="food-grid" className="bg-black">
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

      {/* Removed duplicate Virtual Tour Section */}
    </div>
  );
};

export default Home;
