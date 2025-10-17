/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ihjy4r",
        "template_y1oelme",
        form.current,
        "user_cuGdalc3wsdlPAEKEvtGg",
      )
      .then(
        (result) => {
          alert("Mensagem enviada com sucesso! :D");
          console.log(result.text);
        },
        (error) => {
          alert("Erro ao enviar mensagem: " + error.text);
          console.log(error.text);
        },
      );

    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contato.</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Mensagem" required></textarea>
          <button type="submit">enviar</button>
        </form>
        <a href="#intro">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
