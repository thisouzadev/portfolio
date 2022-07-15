/* eslint-disable require-jsdoc */
import React, {useEffect, useRef} from 'react';
import './intro.scss';
import {init} from 'ityped';

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        'Reactjs',
        'Nodejs',
        'MongoDB',
        'MySQL',
        'Express',
        'Sass',
        'HTML5',
        'CSS3',
        'Javascript',
        'Typescript'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/a.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá, Eu Sou</h2>
          <h1>Thiago Souza</h1>
          <h3>
            Desenvolvedor Web <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#information">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
