/* eslint-disable require-jsdoc */
import React from 'react';
import './menu.scss';
import PropTypes from 'prop-types';

function Menu({menuOpen, setMenuOpen}) {
  return (
    <div className={'menu '+(menuOpen && 'active')}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#information">Perfil</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Certificados</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Depoimentos</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </div>
  );
}

Menu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

export default Menu;
