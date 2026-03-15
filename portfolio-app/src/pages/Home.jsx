import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home page-enter">
      <HeroSection />
    </div>
  );
};

export default Home;
