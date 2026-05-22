import React from 'react';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing-page container">
      <div className="text-center pricing-header">
        <h1 className="page-title">Simple, transparent pricing</h1>
        <p className="page-subtitle">No hidden fees. No surprise charges. Choose the plan that fits your needs.</p>
      </div>

      <div className="pricing-grid">
        {/* Starter Plan */}
        <div className="pricing-card glass-panel">
          <div className="pricing-card-header">
            <h3>Starter</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">0</span>
              <span className="period">/mo</span>
            </div>
            <p>Perfect for side projects and hobbyists.</p>
          </div>
          <div className="pricing-card-features">
            <ul>
              <li><Check className="check-icon" /> Up to 3 projects</li>
              <li><Check className="check-icon" /> Basic analytics</li>
              <li><Check className="check-icon" /> Community support</li>
              <li className="disabled"><Check className="check-icon" /> Custom domains</li>
              <li className="disabled"><Check className="check-icon" /> Team collaboration</li>
            </ul>
          </div>
          <button className="btn btn-secondary w-100">Get Started</button>
        </div>

        {/* Pro Plan */}
        <div className="pricing-card glass-panel popular">
          <div className="popular-badge">Most Popular</div>
          <div className="pricing-card-header">
            <h3 className="gradient-text">Pro</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">29</span>
              <span className="period">/mo</span>
            </div>
            <p>For professional developers and small teams.</p>
          </div>
          <div className="pricing-card-features">
            <ul>
              <li><Check className="check-icon" /> Unlimited projects</li>
              <li><Check className="check-icon" /> Advanced analytics</li>
              <li><Check className="check-icon" /> Priority email support</li>
              <li><Check className="check-icon" /> Custom domains</li>
              <li className="disabled"><Check className="check-icon" /> Team collaboration</li>
            </ul>
          </div>
          <button className="btn btn-primary w-100">Start Free Trial</button>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card glass-panel">
          <div className="pricing-card-header">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">99</span>
              <span className="period">/mo</span>
            </div>
            <p>For organizations with advanced security needs.</p>
          </div>
          <div className="pricing-card-features">
            <ul>
              <li><Check className="check-icon" /> Unlimited projects</li>
              <li><Check className="check-icon" /> Custom analytics</li>
              <li><Check className="check-icon" /> 24/7 dedicated support</li>
              <li><Check className="check-icon" /> Custom domains</li>
              <li><Check className="check-icon" /> Team collaboration</li>
            </ul>
          </div>
          <button className="btn btn-secondary w-100">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
