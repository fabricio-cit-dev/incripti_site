import React from "react";

const ContactOneForm = () => {
  return (
    <div className="contact-form-wrap">
      <form action="#">
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="nome" className="forms-title">Nome Completo</label>
              <input type="text" id="nome" placeholder="Nome Completo" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <label htmlFor="email" className="forms-title">Email</label>
              <input type="email" id="email" placeholder="Email" required />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <label htmlFor="categoria" className="forms-title">Categoria</label>
          <select id="categoria" required>
            <option value="">Selecione uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>
        </div>
        <div className="form-grp">
          <label htmlFor="mensagem" className="forms-title">Seu projeto</label>
          <textarea id="mensagem" name="mensagem" placeholder="Nos fale sobre seu projeto!"></textarea>
        </div>
        <div className="submit-btn text-center">
          <button type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactOneForm;
