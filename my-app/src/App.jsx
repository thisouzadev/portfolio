/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Topbar from './components/topbar/Topbar';
import Works from './components/works/Works';
import Information from './components/information/Information';
import Menu from './components/menu/Menu';

import './app.scss';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Information />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
