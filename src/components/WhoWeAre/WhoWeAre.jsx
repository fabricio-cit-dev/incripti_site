import React from "react";
import img01 from "../../assets/img/images/about_img01.png";
import { Link } from "react-router-dom";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: "smooth" });
  }
};
const WhoWeAre = (props) => {
  return (
    <section id="about" className="about-area-pt-130-pb-130">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img wow fadeInLeft" data-wow-delay=".2s">
              <img src={img01} alt="logo-whoweare"/>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content wow fadeInRight" data-wow-delay=".2s">
              <div className="section-title mb-30">
                <br />
                <br />
                <br />
                <span className="sub-title">Quem nós somos?</span>
                <h2 className="title">
                Uma <span>nova era</span> de mudanças!
                </h2>
              </div>
              <p>
              A empresa de desenvolvimento CIT se transformou em Incript! Nossa nova marca reflete nossa evolução,
              paixão pela inovação e compromisso em fornecer a melhor experiência aos clientes. Continuaremos
              entregando soluções de software personalizadas de alta qualidade para impulsionar o sucesso de nossos
              clientes.
              </p>
              <Link to="/#contact" onClick={() => handleScrollToSection("contact")} className="btn">
                Faça seu projeto conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
