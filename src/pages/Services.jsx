import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  return (
    <section className="page">
      <h1>Our Services</h1>
      <p>Cresco offers comprehensive real estate and investment management solutions designed to maximize your returns and minimize your risks.</p>
      
      <div className="services-grid">
        <ServiceCard 
          title="Real Estate Management"
          description="Professional property management services including tenant relations, maintenance coordination, and financial reporting to maximize your investment returns."
          icon="🏢"
        />
        <ServiceCard 
          title="Investment Advisory"
          description="Expert guidance on real estate investments, market analysis, and portfolio optimization strategies tailored to your financial goals."
          icon="📈"
        />
        <ServiceCard 
          title="Property Development"
          description="End-to-end development services from site acquisition and planning to construction management and project completion."
          icon="🏗️"
        />
        <ServiceCard 
          title="Capital Raising"
          description="Strategic fundraising solutions connecting investors with high-quality real estate opportunities and development projects."
          icon="💰"
        />
        <ServiceCard 
          title="Asset Management"
          description="Comprehensive asset management services to optimize property performance and enhance long-term value creation."
          icon="📊"
        />
        <ServiceCard 
          title="Strategic Advisory"
          description="Strategic consulting services for real estate transactions, market entry strategies, and business development initiatives."
          icon="🎯"
        />
      </div>
    </section>
  );
};

export default Services;
