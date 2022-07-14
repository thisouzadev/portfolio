/* eslint-disable require-jsdoc */
import React from 'react';
import './topbar.scss';
import PropTypes from 'prop-types';

import * as BSIcons from 'react-icons/bs';
import * as MDIcons from 'react-icons/md';
import * as FiIcons from 'react-icons/fi';
import * as FAIcons from 'react-icons/fa';

function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>Souza.</a>
          <div className="itemContainer">
            <BSIcons.BsPersonFill className='icon' />
            <span>+55 21979447656</span>
          </div>
          <div className="itemContainer">
            <MDIcons.MdEmail className='icon' />
            <span>thiagodesouza.dev@gmail.com</span>
          </div>
          <a href="https://www.linkedin.com/in/thisouzadev/" target="_blank" rel="noopener noreferrer">
            <div className="itemContainer">
              <FiIcons.FiLinkedin className='icon' />
            </div>
          </a>
          <a href="https://github.com/thisouzadev" target="_blank" rel="noopener noreferrer">
            <div className="itemContainer">
              <FAIcons.FaGithubAlt className='icon' />
            </div>
          </a>
        </div>
        <div className="right">
          <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>

    </div>
  );
}

Topbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Topbar;
