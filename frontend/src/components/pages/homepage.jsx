import React from 'react';
import Sidebar from '../staticComponents/sidebar.jsx';
import About from '../subComponents/about.jsx';
import Skills from '../subComponents/skills.jsx';
import Experience from '../subComponents/experience.jsx';
import Contact from '../subComponents/contact.jsx';

function Homepage() {
  return (
    <div className='baseRoot' id='page-top'>
      <Sidebar />
      <main className='baseMain mobileOffset'>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='projects'>{/*<Projects />*/}</section>
        <section id='blog'>{/*<Blog />*/}</section>
        <section id='contact'>{<Contact />}</section>
      </main>
    </div>
  );
}

export default Homepage;
