/* eslint-disable require-jsdoc */
import React from 'react';
import './topbar.scss';
// import {Person, Email} from '@mui/icons-material/';
import * as BSIcons from 'react-icons/bs';
import * as MDIcons from 'react-icons/md';

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

export default Topbar;
