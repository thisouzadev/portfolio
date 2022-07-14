/* eslint-disable require-jsdoc */
import React from 'react';
import './information.scss';

function Information() {
  const information = [
    {
      information: 'Name',
      answeredInformation: 'Thiago Souza e Souza',
    },
    {
      information: 'Email',
      answeredInformation: 'thiagodesouza.dev@gmail.com',
    },
    {
      information: 'Celular/WhatsApp',
      answeredInformation: '+55(21)97944-7656',
    },
    {
      information: 'Data de Nascimento',
      answeredInformation: 'Outubro 2, 1991',
    },
    {
      information: 'Cidade',
      answeredInformation: 'Rio de janeiro, RJ',
    },
    {
      information: 'GitHub',
      answeredInformation: 'https://github.com/thisouzadev',
    },
    {
      information: 'Linkedin',
      answeredInformation: 'https://www.linkedin.com/in/thisouzadev/',
    },
  ];

  return (
    <div className='information' id='information'>
      <div className="section-title mt-5">
        <h1>Thiago Souza</h1>
        <h2>DESENVOLVEDOR WEB</h2>
      </div>
      <p className='description'>
        Formado na Trybe e graduado em Engenharia de Produção na UGB.
        desenvolvedor web motivado, com 1 anos de experiência.
        Sou apaixonado por Tecnologia, desenvolvimento e marcas que trabalhem
        para contribuir com uma melhor interação digital.
      </p>
      <br />
      <h1 className="signature">Thiago Souza</h1>
      {information.map((item, index) => {
        return (
          <section key={index} className="container">
            <p className="about-info">
              {item.information + ': '}
            </p>
            <span>{item.answeredInformation}</span>
          </section>
        );
      })}
    </div>
  );
}

export default Information;
