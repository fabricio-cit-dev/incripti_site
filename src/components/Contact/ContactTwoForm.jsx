import React from "react";

const ContactTwoForm = () => {
  return (
    <div className="contact-form-wrap-two wow fadeInRight" data-wow-delay=".2s">
      <h2 className="title">Entre em contato conosco!</h2>
      <form action="#">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email Address" required />
        <textarea name="massage" placeholder="Massage" required></textarea>
        <button type="submit" className="btn btn-two">
          Enviar mensagem
        </button>
      </form>
    </div>
  );
};

export default ContactTwoForm;
