import React from 'react';
import { Layers, Smartphone, Database, Lock, Cpu, Cloud } from 'lucide-react';
import './Features.css';

const Features = () => {
  const featureList = [
    {
      icon: <Layers />,
      title: "Microservices Architecture",
      description: "Build robust applications using loosely coupled, independently deployable services that scale automatically."
    },
    {
      icon: <Smartphone />,
      title: "Mobile First Design",
      description: "Our components are responsive out of the box, ensuring a perfect experience on any device size."
    },
    {
      icon: <Database />,
      title: "Distributed Database",
      description: "Data replicated globally for minimal latency and high availability across all regions."
    },
    {
      icon: <Lock />,
      title: "End-to-End Encryption",
      description: "Zero-trust security model with automatic certificate management and data encryption at rest."
    },
    {
      icon: <Cpu />,
      title: "AI-Powered Insights",
      description: "Built-in analytics using advanced machine learning models to predict trends and user behavior."
    },
    {
      icon: <Cloud />,
      title: "Serverless Edge Computing",
      description: "Run your code at the edge, closer to your users, eliminating cold starts and reducing latency."
    }
  ];

  return (
    <div className="features-page">
      <div className="container">
        <div className="features-header text-center">
          <h1 className="page-title gradient-text">Everything you need to build faster</h1>
          <p className="page-subtitle">
            AstroTech provides a comprehensive suite of tools designed to accelerate your development workflow from concept to production.
          </p>
        </div>

        <div className="features-grid-large">
          {featureList.map((feature, index) => (
            <div className="feature-card-large glass-panel" key={index}>
              <div className="feature-icon-large">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
