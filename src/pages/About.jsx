import React from 'react';
import { FaGlobe, FaChartLine, FaBuilding, FaHandshake, FaUsers } from 'react-icons/fa';

const About = () => {
  const expertise = [
    {
      icon: <FaGlobe className="w-8 h-8 mb-4 text-amber-600" />,
      title: 'Cross-border Transactions',
      description: 'Expertise in international real estate investments and transactions across Europe and beyond.'
    },
    {
      icon: <FaChartLine className="w-8 h-8 mb-4 text-amber-600" />,
      title: 'Portfolio Optimization',
      description: 'Strategies to maximize returns and minimize risks in your real estate investments.'
    },
    {
      icon: <FaBuilding className="w-8 h-8 mb-4 text-amber-600" />,
      title: 'Property Management',
      description: 'Comprehensive property development and management services tailored to your needs.'
    },
    {
      icon: <FaHandshake className="w-8 h-8 mb-4 text-amber-600" />,
      title: 'Strategic Advisory',
      description: 'Expert guidance for making informed real estate investment decisions.'
    },
    {
      icon: <FaUsers className="w-8 h-8 mb-4 text-amber-600" />,
      title: 'Investor Relations',
      description: 'Building strong relationships with investors and stakeholders.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Cresco</h1>
            <p className="text-xl text-gray-300 mb-8">
              A premier boutique advisory firm specializing in cross-border real estate investment 
              and strategic management solutions. Based in Frankfurt, we serve clients across 
              Europe and beyond with comprehensive real estate services.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide exceptional real estate investment and management services that maximize value 
              for our clients while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto mt-4"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Cresco</h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in the European real estate market, our team combines local 
                expertise with international perspective to deliver tailored solutions that meet your 
                specific investment objectives.
              </p>
              <div className="space-y-4">
                {[
                  'Proven track record in European markets',
                  'Boutique approach with global reach',
                  'Personalized service and attention',
                  'Innovative investment strategies',
                  'Strong network of industry partners'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-amber-600 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="European real estate" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;