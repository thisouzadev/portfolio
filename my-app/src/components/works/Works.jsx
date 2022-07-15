/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import './works.scss';

function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    // {
    //   id: '1',
    //   icon: 'assets/logoTrybe.png',
    //   title: 'Fundamentos do Desenvolvimento Web',
    //   desc:
    //     'Unix & bash, Git, JS básico &, DOM, HTML & CSS, JS ES6, higher order functions e testes unitários.',
    //   img: 'assets/certificado1.png',
    // },
    // {
    //   id: '2',
    //   icon: 'assets/logoTrybe.png',
    //   title: 'Desenvolvimento Front-End',
    //   desc:
    //     'React, incluindo Componentes, Estado e Eventos, Componentes Controlados, Ciclo de Vida, Router, Testes com RTL, Redux com React, Context API e React Hooks.',
    //   img: 'assets/certificado2.png',
    // },
    // {
    //   id: '3',
    //   icon: 'assets/logoTrybe.png',
    //   title: 'Desenvolvimento Back-End',
    //   desc:
    //     'Banco de Dados SQL e NoSQL, Node e Express.js, MVC, API, ReST, JWT e File Upload, SOLID, ORM, Sockets e deploy com Heroku.',
    //   img: 'assets/certificado3.png',
    // },
    {
      id: '1',
      icon: 'assets/logoTrybe.png',
      title: 'Desenvolvimento Web',
      desc:
        'Fundamentos do desenvolvimento web, Desenvolvimento Front-End, Desenvolvimento Back-End, Ciência da Computção e Soft Skills.',
      img: 'assets/certificado4.png',
      cert: 'https://images.credential.net/embed/u5ckwmvr.png',
      certWord: 'certificado',
    },
    {
      id: '2',
      icon: 'assets/ugb.jpeg',
      title: 'Engenharia de Produção',
      desc:
        ' Planeja, projeta e gerencia sistemas organizacionais que envolvem recursos humanos, materiais, tecnológicos, financeiros e ambientais. ',
      img: 'assets/ugbDiploma.jpg',
    },
  ];

  const handleClick = (way) => {
    way === 'left' ?
      setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1) :
      setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
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
                  <a className='animate-charcter' href={d.cert} target="_blank" rel="noopener noreferrer">{d.certWord}</a>
                  <a className='animate-charcter' href="https://www.linkedin.com/in/thisouzadev/" target="_blank" rel="noopener noreferrer">mais informações</a>
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
