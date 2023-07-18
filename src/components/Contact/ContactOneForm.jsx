import React from "react";
import NameIcon from "../../assets/img/icon/icons8-nome-24.png";
import EmailIcon from "../../assets/img/icon/icons8-nova-mensagem-24.png";
import ProposalIcon from "../../assets/img/icon/icons8-documento-48.png";
import TalkIcon from "../../assets/img/icon/icons8-conversa-48.png";
import { IconCircleDot } from "@tabler/icons-react";
import { IconPlayerPlayFilled } from '@tabler/icons-react';

const ContactOneForm = () => {
  return (
    <section id="contactform" className="contact-form-wrap">
      <div className="leftDiv">
        <div className="step-map">
          <h2 className="step-map-title">Qual será o próximo passo?</h2>
          <p className="step-map-subtitle">
            Você está um passo mais perto de construir seu produto perfeito
          </p>
          <div className="step">
            <span className="step-dot">
              <img src={ProposalIcon} />
            </span>
            <div className="title-subtitle">
              <div className="Number-title">
                <span className="step-number">1.</span>
                <span className="step-title">
                  Receba uma proposta personalizada rapidamente
                </span>
              </div>
              <p className="step-description">
                Escopo, cronograma e preço necessários serão incluídos se você
                nos fornecer informações detalhadas sobre um projeto.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-dot">
              <img src={TalkIcon} />
            </span>
            <div className="title-subtitle">
              <div className="Number-title">
                <span className="step-number">2.</span>
                <span className="step-title">
                  Converse conosco para discutir suas necessidades
                </span>
              </div>
              <p className="step-description">
                Vamos nos familiarizar e discutir todas as variantes e opções
                possíveis. Google Meet geralmente funciona bem.
              </p>
            </div>
          </div>
          <div className="step">
            <span className="step-dot">
              <IconPlayerPlayFilled />
            </span>
            <div className="title-subtitle">
              <div className="Number-title">
                <span className="step-number">3.</span>
                <span className="step-title">
                  Iniciaremos a construção do seu projeto juntos
                </span>
              </div>
              <p className="step-description">
                Quando o contrato for assinado e todas as metas definidas,
                podemos iniciar a primeira sprint.
              </p>
            </div>
          </div>
        </div>
      </div>
      <form action="#" className="DivForms">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.25)",
            color: "#f3ef01",
          }}
        >
          Fale Conosco
        </h2>
        <div className="row">
          <div className="col-md-6">
            <div className="form-grp">
              <div className="input-with-icon">
                <img
                  src={NameIcon}
                  alt="Ícone de nome"
                  className="input-icon"
                />
                <input
                  type="text"
                  id="nome"
                  placeholder="Digite seu nome"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-grp">
              <div className="input-with-icon">
                <img
                  src={EmailIcon}
                  alt="Ícone de e-mail"
                  className="input-icon"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu email"
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-grp">
          {/* <label htmlFor="categoria" className="forms-title">
            Categoria
          </label> */}
          <select id="categoria" required>
            <option value="">Selecione uma categoria</option>
            <option value="categoria1">Categoria 1</option>
            <option value="categoria2">Categoria 2</option>
            <option value="categoria3">Categoria 3</option>
          </select>
        </div>
        <div className="form-grp">
          {/* <label htmlFor="mensagem" className="forms-title">
            Seu projeto
          </label> */}
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Nos fale sobre seu projeto!"
          ></textarea>
        </div>
        <div className="submit-btn text-center">
          <button type="submit" className="btn">
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactOneForm;
