import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with payment integration',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛍️',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management system with real-time updates',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      image: '✅',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with multiple locations',
      tech: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Dashboard for tracking social media metrics and insights',
      tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      image: '📊',
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'Modern blogging platform with admin dashboard',
      tech: ['Next.js', 'Sanity CMS', 'Vercel'],
      image: '📝',
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time messaging app with user authentication',
      tech: ['React', 'Socket.io', 'Node.js', 'Redis'],
      image: '💬',
    }
  ];

  return (
    <div className="projects page-enter">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>Explore some of my recent work and side projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="project-image">{project.image}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <a href="#" className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
