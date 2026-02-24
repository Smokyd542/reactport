import React from 'react';
import './About.css';
import { FaGamepad, FaMusic, FaPlane, FaApple, FaVideo, FaCoffee, FaCar, FaMoneyBillWave, FaDownload } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header">
          <div className="about-icon-top">👤</div>
          <h2>About me</h2>
          <div className="underline"></div>
          <p className="about-intro">
            <span>Hello, I'm Jack.</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Maecenas purus ex, varius non erat purus, venenatis corene puras. 
            Morbi ac ex cursus, varius eros ex, convallis sem.
          </p>
        </div>

        <div className="about-content">
          {/* Left Side: Personal Details */}
          <div className="details-col">
            <h3>Personal Details</h3>
            <ul className="details-list">
              <li><strong>Birthdate:</strong> 21-12-1992</li>
              <li><strong>Phone:</strong> +91 1234567890</li>
              <li><strong>Email:</strong> hi@jackbrown.com</li>
              <li><strong>Website:</strong> www.jackbrown.com</li>
              <li><strong>Address:</strong> 123 London, UK</li>
              <li><strong>Job Status:</strong> <span className="status-badge">Available</span></li>
            </ul>
          </div>

          {/* Right Side: My Interests */}
          <div className="interests-col">
            <h3>My Interests</h3>
            <div className="interests-grid">
              <div className="interest-item"><FaGamepad /> <span>GAMES</span></div>
              <div className="interest-item"><FaMusic /> <span>MUSIC</span></div>
              <div className="interest-item"><FaPlane /> <span>TRAVEL</span></div>
              <div className="interest-item"><FaApple /> <span>MAC OS</span></div>
              <div className="interest-item"><FaVideo /> <span>CINEMA</span></div>
              <div className="interest-item"><FaCoffee /> <span>COFFEE</span></div>
              <div className="interest-item"><FaCar /> <span>CARS</span></div>
              <div className="interest-item"><FaMoneyBillWave /> <span>MONEY</span></div>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="about-footer">
          <button className="download-btn">
            Download CV <FaDownload />
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;