import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import './App.css';
import './animations.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <section id="home">
          <Home />
        </section>
      
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>

          <section id="about">
          <About />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
    
      <Footer />
    </div>
  );
}

export default App;
