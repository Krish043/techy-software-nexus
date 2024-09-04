import React from 'react';
import './services.css';
import i1 from '../assets/i1.png';
import i2 from '../assets/i2.png';
import i3 from '../assets/i3.png';
import i4 from '../assets/i4.png';
import i5 from '../assets/i5.jpg';
import i6 from '../assets/i6.jpg';
const Services = () => {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <div className="service-item-front">
            <img src={i1} alt="Custom Software Development" />
            <h3>Custom Software Development</h3>
            <p>Tailored software solutions to meet specific business needs. This can include web applications, mobile apps, enterprise software, and more.</p>
          </div>
          <div className="service-item-back">
            <img src={i2} alt="Cloud Computing Solutions" />
            <h3>Cloud Computing Solutions</h3>
            <p>Services that help businesses migrate to and manage their operations on the cloud, including cloud infrastructure setup, cloud-native app development, and cloud security.</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-front">
            <img src={i3} alt="Cybersecurity Services" />
            <h3>Cybersecurity Services</h3>
            <p>Comprehensive security solutions to protect businesses from cyber threats. Services can include security assessments, vulnerability scanning, and incident response.</p>
          </div>
          <div className="service-item-back">
            <img src={i4} alt="Data Analytics and AI Solutions" />
            <h3>Data Analytics and AI Solutions</h3>
            <p>Services that help businesses leverage data for better decision-making through analytics, machine learning, and artificial intelligence.</p>
          </div>
        </div>
        <div className="service-item">
          <div className="service-item-front">
          <img src={i6} alt="Managed IT Services" />
            <h3>Managed IT Services</h3>
            <p>Comprehensive IT support and management services to ensure smooth and efficient operation of IT systems, including network management, helpdesk support, and proactive maintenance.</p>
          </div>
          <div className="service-item-back">
          
          <img src={i5} alt="IT Consulting and Strategy" />
            <h3>IT Consulting and Strategy</h3>
            <p>Expert advice to help businesses develop and implement IT strategies that align with their goals. This includes IT infrastructure planning, technology roadmaps, and digital transformation strategies.</p>
          
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
