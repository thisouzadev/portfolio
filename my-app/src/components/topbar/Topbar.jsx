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
          <a href = "https://web.whatsapp.com/send?phone=979447656" target="_blank" rel="noopener noreferrer">
            <div className="itemContainer">
              <BSIcons.BsWhatsapp className='icon' />
            </div>
          </a>
        </div>
        <div className='tecnology'>
          <img align="center" alt="bash" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bash/bash-original.svg"></img>
          <img align="center" alt="git" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"></img>
          <img align="center" alt="HTML" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"></img>
          <img align="center" alt="CSS" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"></img>
          <img align="center" alt="bootstrap" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg"></img>
          <img align="center" alt="Js" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"></img>
          <img align="center" alt="React" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"></img>
          <img align="center" alt="redux" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"></img>
          <img align="center" alt="mysql" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"></img>
          <img align="center" alt="mongodb" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"></img>
          <img align="center" alt="docker" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg"></img>
          <img align="center" alt="nodejs" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"></img>
          <img align="center" alt="heroku" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/heroku/heroku-original.svg"></img>
          <img align="center" alt="socket.io" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg"></img>
          <img align="center" alt="python" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"></img>
          <img align="center" alt="java" height="45" width="60" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"></img>
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
