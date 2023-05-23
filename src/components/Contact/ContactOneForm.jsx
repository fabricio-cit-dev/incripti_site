import React from "react";

const ContactOneForm = () => {
  return (
    <div className="contact-form-wrap">
      <form action="#">
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <input type="text" id="form-placeholder" placeholder="Nome Completo" required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <input type="email" placeholder="Email" required />
            </div>
          </div>
        </div>
        <div className="form-grp">
          <textarea name="massage" placeholder="Nos fale sobre seu projeto!"></textarea>
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
