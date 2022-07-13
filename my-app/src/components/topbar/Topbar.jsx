/* eslint-disable require-jsdoc */
import React from 'react';
import './topbar.scss';

function Topbar() {
  return (
    <div className='topbar'>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className='logo'>genius.</a>
        </div>
        <div className="right"></div>
      </div>

    </div>
  );
}

export default Topbar;
