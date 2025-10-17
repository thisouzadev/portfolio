/* eslint-disable require-jsdoc */
import React from "react";
import "./information.scss";

function Information() {
  const information = [
    {
      information: "Name",
      answeredInformation: "Thiago Souza e Souza",
    },
    {
      information: "Email",
      answeredInformation: "thiagodesouza.dev@gmail.com",
    },
    {
      information: "Celular/WhatsApp",
      answeredInformation: "+55(21)97944-7656",
    },
    {
      information: "Data de Nascimento",
      answeredInformation: "Outubro 2, 1991",
    },
    {
      information: "Cidade",
      answeredInformation: "Rio de janeiro, RJ",
    },
    {
      information: "GitHub",
      answeredInformation: "https://github.com/thisouzadev",
    },
    {
      information: "Linkedin",
      answeredInformation: "https://www.linkedin.com/in/thisouzadev/",
    },
  ];

  return (
    <div className="information" id="information">
      <div className="section-title mt-5">
        <h1>Thiago Souza</h1>
        <h2>DESENVOLVEDOR WEB</h2>
      </div>
      <p className="description">
        Trabalho fortemente para melhorar meu conhecimento técnico, quanto
        minhas habilidades de comunicação interpessoal, pois acredito que as
        pessoas são a base para alcançar o sucesso. Por isso, gosto de trabalhar
        em equipe e compartilhar conhecimentos, tenho a certeza de que o
        trabalho desenvolvido em conjunto com foco na qualidade sempre irá
        alcançar os melhores resultados.
      </p>
      <br />
      <h1 className="signature">Thiago Souza</h1>
      {information.map((item, index) => {
        return (
          <section key={index} className="container">
            <p className="about-info">{item.information + ": "}</p>
            <span>{item.answeredInformation}</span>
          </section>
        );
      })}
    </div>
  );
}

export default Information;
