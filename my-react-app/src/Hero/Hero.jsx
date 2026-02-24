import React from 'react';
import './Hero.css';
// Import your icons or use CDN in index.html
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

const Hero = () => {
  return (
    <section className="hero-container">
      {/* The floating 3D Profile Card */}
      <div className="profile-card">
        <div className="profile-img-wrapper">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="profile-img"
          />
        </div>
        
        <h1 className="profile-name">John Doe</h1>
        <p className="profile-profession">Full Stack Developer & 3D Designer</p>
        
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;