import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faPhone, faEnvelope,faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import './Feedback.css';

const Feedback = ({ userId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    comments: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClick = (url) => {
    window.open = url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://techy-software-nexus-backend.onrender.com/submit-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, userId }),
      });

      if (response.ok) {
        alert('Feedback submitted successfully.');
        setFormData({ name: '', email: '', rating: '', comments: '' });
        setSubmitted(true);
      } else {
        const errorText = await response.text();
        alert(`Error: ${errorText}`);
      }
    } catch (error) {
      alert('An error occurred while submitting feedback.');
    }
  };

  return (
    <section id="fb">
      <div id='feedback'>
      {!submitted ? (
        <>
        <h2>Feedback</h2>
        <div className="fc">
        <div className="lft">  
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange} 
            required 
          />
          <input 
            type="text" 
            name="rating" 
            placeholder="Rating" 
            value={formData.rating}
            onChange={handleChange} 
            required 
          />
          <textarea 
            name="comments" 
            placeholder="Comments" 
            value={formData.comments}
            onChange={handleChange} 
            required 
          ></textarea>
          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND" onClick={handleSubmit}>
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} className="fa-paper-plane-icon" />
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>
        </div>
        <div className="ryt">
        <ul className="contact-list">
            <li className="list-item"><FontAwesomeIcon icon={faMapMarker} /><span className="contact-text place">City, State</span></li>
            <li className="list-item"><FontAwesomeIcon icon={faPhone} /><span className="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></li>
            <li className="list-item"><FontAwesomeIcon icon={faEnvelope} /><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">techysoftware@gmail.com</a></span></li>
          </ul>
          <hr />
          <ul className="social-media-list">
      <li>
        <a href="https://github.com/Krish043" target="_blank" className="contact-icon">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/krish-gangajaliya-802b79266/" target="_blank" className="contact-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Krish_043" target="_blank" className="contact-icon">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/krrish_145/" target="_blank" className="contact-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
          </ul>
          
          <hr />
          <div className="copyright">&copy; Techy Software all rights reserved</div>
        </div>
        </div>
        </>

      ) : (
        <div id='fd'>
          <h2 id='fdbk'>Thank you for your feedback!</h2>
        </div>
      )}
    </div>
    </section>
  );
};

export default Feedback;
