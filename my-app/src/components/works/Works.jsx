/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import './works.scss';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: 'assets/logoTrybe.png',
      title: 'Fundamentos do Desenvolvimento Web',
      desc:
        'Unix & bash, Git, JS básico &, DOM, HTML & CSS, JS ES6, higher order functions e testes unitários.',
      img: 'assets/certificado1.png',
    },
    {
      id: '2',
      icon: 'assets/logoTrybe.png',
      title: 'Desenvolvimento Front-End',
      desc:
        'React, incluindo Componentes, Estado e Eventos, Componentes Controlados, Ciclo de Vida, Router, Testes com RTL, Redux com React, Context API e React Hooks.',
      img: 'assets/certificado2.png',
    },
    {
      id: '3',
      icon: 'assets/logoTrybe.png',
      title: 'Desenvolvimento Back-End',
      desc:
        'Banco de Dados SQL e NoSQL, Node e Express.js, MVC, API, ReST, JWT e File Upload, SOLID, ORM, Sockets e deploy com Heroku.',
      img: 'assets/certificado3.png',
    },
    {
      id: '4',
      icon: 'assets/logoTrybe.png',
      title: 'formação em desenvolvimento web',
      desc:
        'Fundamentos do desenvolvimento web, Desenvolvimento Front-End, Desenvolvimento Back-End, Ciência da Computção e Soft Skills.',
      img: 'assets/certificado4.png',
    },
    {
      id: '5',
      icon: 'assets/ugb.jpeg',
      title: 'Bacharelado em Engenharia de Produção',
      desc:
        'planeja, projeta e gerencia sistemas organizacionais que envolvem recursos humanos, materiais, tecnológicos, financeiros e ambientais. ',
      img: 'assets/ugbDiploma.jpg',
    },
  ];

  const handleClick = (way) => {
    way === 'left' ?
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 4) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <h1>Certificados</h1>
      <div
        className="slider"
        style={{transform: `translateX(-${currentSlide * 100}vw)`}}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" style={{blockSize: 'auto'}} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
export default Works;
