import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Payment Orchestration Engine',
      description: 'High-throughput payment routing engine handling 1000+ requests per minute across 70+ payment gateways with live rule-based logic.',
      tech: ['Node.js', 'TypeScript', 'Redis', 'PostgreSQL'],
      badge: 'Most Complex Build',
      status: 'completed',
      features: [
        '1000+ TPS in production',
        '70+ gateway integrations',
        'Rule-based live routing',
        'Circuit breaker resilience'
      ]
    },
    {
      id: 2,
      title: 'Cinema Booking Platform — UAE',
      description: 'Full-featured movie ticketing and seat reservation platform for the UAE region with real-time seat locking and conflict prevention.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis'],
      badge: 'In Progress',
      status: 'in-progress',
      features: [
        'Real-time seat reservation',
        'Redis TTL seat locking',
        'Multi-screen venue management',
        'Regional gateway integration'
      ]
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        
        <div className="projects-list">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.status}`}>
              <div className="project-header">
                <div className="project-icon">
                  {project.status === 'completed' ? '🔗' : '🎬'}
                </div>
                <span className={`project-badge ${project.status}`}>
                  {project.badge}
                </span>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <ul className="project-features">
                {project.features.map((feature, i) => (
                  <li key={i}>
                    <span className="feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
