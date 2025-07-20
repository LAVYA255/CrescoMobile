import React from 'react';

const About = () => {
  return (
    <section className="page">
      <h1>About Cresco</h1>
      <p>Cresco is a boutique advisory firm specializing in cross-border real estate investment and strategic management solutions. Based in Frankfurt, we serve clients across Europe and beyond with comprehensive real estate services.</p>
      
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', marginBottom: '1rem' }}>Our Mission</h2>
        <p>To provide exceptional real estate investment and management services that maximize value for our clients while maintaining the highest standards of integrity and professionalism.</p>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', marginBottom: '1rem' }}>Our Expertise</h2>
        <ul style={{ listStyle: 'disc', marginLeft: '2rem', color: 'var(--text-light)' }}>
          <li>Cross-border real estate transactions</li>
          <li>Investment portfolio optimization</li>
          <li>Property development and management</li>
          <li>Strategic advisory services</li>
          <li>Capital raising and investor relations</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', marginBottom: '1rem' }}>Why Choose Cresco</h2>
        <p>With years of experience in the European real estate market, our team combines local expertise with international perspective to deliver tailored solutions that meet your specific investment objectives.</p>
      </div>
    </section>
  );
};

export default About;
