import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;