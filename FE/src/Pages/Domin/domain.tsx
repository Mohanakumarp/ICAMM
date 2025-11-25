import React from 'react';
import './domain.css';

interface Domain {
  id: number;
  title: string;
  icon: string;
  description: string;
}

const domains: Domain[] = [
  {
    id: 1,
    title: 'Cryptography and Network Security',
    icon: '🔐',
    description: 'Advanced encryption techniques and secure communication protocols'
  },
  {
    id: 2,
    title: 'Graph Theory and Combinatorics',
    icon: '🔗',
    description: 'Mathematical structures for modeling relationships and counting problems'
  },
  {
    id: 3,
    title: 'Control Theory and Fractional Calculus',
    icon: '📈',
    description: 'System dynamics and mathematical analysis of fractional derivatives'
  },
  {
    id: 4,
    title: 'Optimization Techniques and Stochastic Models',
    icon: '⚡',
    description: 'Mathematical optimization and probabilistic modeling approaches'
  },
  {
    id: 5,
    title: 'ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING',
    icon: '🏛️',
    description: 'Real-world problem solving through mathematical representations'
  },
  {
    id: 6,
    title: 'Computational Mathematics',
    icon: '💻',
    description: 'AI-based computing and numerical mathematical solutions'
  }
];

const Domain: React.FC = () => {
  return (
    <div className="page-wrapper">
      <div className="domain-container">
        <div className="domain-header">
          <h1 className="domain-title">RESEARCH DOMAINS</h1>
          <p className="domain-subtitle">Explore our key areas of mathematical and computational research</p>
        </div>
      
      <div className="domain-grid">
        {domains.map((domain) => (
          <div key={domain.id} className="domain-card">
            <div className="domain-card-inner">
              <div className="domain-card-front">
                <div className="domain-icon-container">
                  <div className="domain-icon">{domain.icon}</div>
                </div>
                <h3 className="domain-card-title">{domain.title}</h3>
              </div>
              <div className="domain-card-back">
                <div className="domain-icon-small">{domain.icon}</div>
                <h3 className="domain-card-title-back">{domain.title}</h3>
                <p className="domain-description">{domain.description}</p>
                <div className="domain-learn-more">
                  <span>Learn More →</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Domain;