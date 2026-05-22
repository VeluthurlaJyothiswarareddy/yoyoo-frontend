import React from 'react';
import { ArrowRight, Zap, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text-wrapper">
            <h1 className="hero-title">
              Build the future with <br />
              <span className="gradient-text">AstroPhysics111111</span>
            </h1>
            <p className="hero-subtitle">
              The most powerful platform to scale your business into the stratosphere. 
              Lightning fast, ultra-secure, and beautifully designed.
            </p>
            <div className="hero-cta">
              <Link to="/signup" className="btn btn-primary btn-large">
                Get Started <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/features" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="glass-panel hero-card">
              <div className="card-header">
                <div className="dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              <div className="card-body">
                <div className="skeleton-line full"></div>
                <div className="skeleton-line medium"></div>
                <div className="skeleton-line short"></div>
                <div className="metrics-grid">
                  <div className="metric-box glass-panel"></div>
                  <div className="metric-box glass-panel"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="features-preview container">
        <h2 className="section-title text-center">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Zap className="feature-icon" />
            </div>
            <h3>Lightning Fast</h3>
            <p>Optimized for speed. Deliver your content to users anywhere in the world in milliseconds.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <h3>Bank-Grade Security</h3>
            <p>Your data is protected by industry-leading encryption and security protocols.</p>
          </div>
          <div className="feature-card glass-panel">
            <div className="feature-icon-wrapper">
              <Globe className="feature-icon" />
            </div>
            <h3>Global Scale</h3>
            <p>Deploy to our global edge network with a single click. Reach your audience everywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
