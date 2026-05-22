import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-text gradient-text">AstroTech</span>
          </Link>
          <p className="footer-desc">
            Empowering developers to build the next generation of web applications. Fast, secure, and beautiful.
          </p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Product</h4>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="#">Changelog</Link>
            <Link to="#">Documentation</Link>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <Link to="#">About Us</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Contact</Link>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AstroTech Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
