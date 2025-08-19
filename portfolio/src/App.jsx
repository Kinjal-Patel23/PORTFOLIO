// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import useActiveSection from './hooks/userActiveSection';

function App() {

    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const activeSection = useActiveSection(sectionIds);

  return (
    <div className="App">
      <Navbar activeSection={activeSection}/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;