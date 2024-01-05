import './App.css';
import React, { useEffect, useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import TopBar from './components/topbar/TopBar';
import About from './components/about/About';
import SubmitForm from './components/form/SubmitForm';

function App() {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const checkIsMobile = () => {
  //     setIsMobile(window.innerWidth <= 767);
  //   };

  //   checkIsMobile();
  //   window.addEventListener('resize', checkIsMobile);

  //   return () => {
  //     window.removeEventListener('resize', checkIsMobile);
  //   };
  // }, []);


  return (
    <div className="App">
      <div className="sticky-top">
        <TopBar scrollToSection={scrollToSection} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="form">
        <SubmitForm />
      </div>
      <div id="mentors" className="block">
        MENTORS
      </div>
      <div id="faq" className="block">
        FAQ
      </div>
      <div id="contact" className="block">
        CONTACT
      </div>
    </div>
  );
}
export default App;
library.add(fab, fas, far)