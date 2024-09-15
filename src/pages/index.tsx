
import {FC, memo} from 'react';

import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Footer from '../components/Footer'


const Home: FC = memo(() => {

  return (
    <div className="bg-gray-100 min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-8">
      <About />
      
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
    </main>
    <Footer />
  </div>
  );
});

export default Home;
