import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home page-enter">
      <HeroSection />

      <section className="showcase">
        <div className="showcase-card">
          <div className="card-icon">💻</div>
          <h3>Web Development</h3>
          <p>Building responsive and modern web applications</p>
        </div>
        <div className="showcase-card">
          <div className="card-icon">🎨</div>
          <h3>UI/UX Design</h3>
          <p>Creating beautiful and intuitive user interfaces</p>
        </div>
        <div className="showcase-card">
          <div className="card-icon">⚙️</div>
          <h3>Backend Development</h3>
          <p>Developing scalable server-side solutions</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
