import React from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Volunteering } from './components/Volunteering';
import { Skills } from './components/Skills';
import { Languages } from './components/Languages';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Volunteering />
        <Skills />
        <Languages />
      </main>
      <Contact />
    </div>
  );
};

export default App;