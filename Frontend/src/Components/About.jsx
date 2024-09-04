import React from 'react';
import './About.css'; // Import CSS file
import i1 from '../assets/about1.jpg';
import i2 from '../assets/about2.jpg';
import i3 from '../assets/about3.jpg';
import i4 from '../assets/about4.jpg';
const AboutUs = () => {
  return (
    <section id="about-us">
      <div className="about-content">
        <h2>About Us</h2>
        <div className="wrapper">
      <div className="container">
        <input type="radio" name="slide" id="c1" defaultChecked />
        <label htmlFor="c1" className="card" style={{ backgroundImage: `url(${i1})` }}>
          <div className="row">
            <div className="icon">1</div>
            <div className="description">
              <h4>Innovation at Our Core</h4>
              <p>At Techy Software, we strive to stay ahead of the curve by continuously innovating and adopting the latest technologies. Our team is dedicated to creating cutting-edge solutions that meet the evolving needs of our clients.
              </p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" />
        <label htmlFor="c2" className="card" style={{ backgroundImage: `url(${i2})` }}>
          <div className="row">
            <div className="icon">2</div>
            <div className="description">
              <h4>Customer-Centric Approach</h4>
              <p>Our clients are at the heart of everything we do. We focus on understanding their unique challenges and requirements, ensuring that our solutions are tailored to deliver maximum value and satisfaction.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" />
        <label htmlFor="c3" className="card" style={{ backgroundImage: `url(${i3})` }}>
          <div className="row">
            <div className="icon">3</div>
            <div className="description">
              <h4>Experienced and Passionate Team</h4>
              <p>Our team is composed of seasoned professionals who are passionate about technology and driven by a desire to solve complex problems. We bring a wealth of experience and expertise to every project we undertake.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" />
        <label htmlFor="c4" className="card" style={{ backgroundImage: `url(${i4})` }}>
          <div className="row">
            <div className="icon">4</div>
            <div className="description">
              <h4>Commitment to Quality</h4>
              <p>Quality is paramount at Techy Software. We adhere to the highest standards of excellence in all our products and services, ensuring that our clients receive reliable, efficient, and effective solutions.</p>
            </div>
          </div>
        </label>
      </div>
    </div>
      </div>
    </section>
  );
};

export default AboutUs;
