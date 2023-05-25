import React from "react";
import { Link } from "react-router-dom";
import Ares from "../../assets/img/projects/ares mockup sem fundo.png"
import MS from "../../assets/img/projects/mockup ms sem fundo.png"
import CL from "../../assets/img/projects/mockup tela sem fundo.png"

const WhitePaper = () => {
  return (
    <section className="document-area pt-60">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-lg-5 col-md-7">
            <div
              className="document-content mt-50 wow fadeInRight"
              data-wow-delay=".2s"
            >
              <div className="section-title mb-35">
                <span className="sub-title">Projetos</span>
                <h2 className="title">
                  Nosso <span>Portfólio</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
