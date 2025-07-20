import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="page">
      <h1>Contact Us</h1>
      <p>Get in touch with our team to discuss your real estate investment needs. We're here to help you achieve your investment goals.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
        {/* Contact Information */}
        <div>
          <h2 style={{ fontFamily: 'var(--font-heading)', color: 'var(--primary-color)', marginBottom: '1.5rem' }}>Get In Touch</h2>
          <div style={{ marginBottom: '1rem' }}>
            <strong>📧 Email:</strong>
            <p style={{ margin: '0.5rem 0', color: 'var(--text-light)' }}>info@cresco-frankfurt.de</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>📞 Phone:</strong>
            <p style={{ margin: '0.5rem 0', color: 'var(--text-light)' }}>+49 (0)69 1234 5678</p>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <strong>📍 Address:</strong>
            <p style={{ margin: '0.5rem 0', color: 'var(--text-light)' }}>Frankfurt am Main, Germany</p>
          </div>
          <div>
            <strong>🕒 Business Hours:</strong>
            <p style={{ margin: '0.5rem 0', color: 'var(--text-light)' }}>Monday - Friday: 9:00 AM - 6:00 PM</p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="cta-button" style={{ width: '100%' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
