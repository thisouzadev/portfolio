/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {useRef} from 'react';
import './contact.scss';
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_y1oelme', e.target, 'user_cuGdalc3wsdlPAEKEvtGg')
        .then((result) => {
          alert('Mensagem enviada com sucesso! :D');
          console.log(result.text);
        }, (error) => {
          alert(error.message);
          console.log(error.text);
        });
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
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
