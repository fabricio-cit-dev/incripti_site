import React from "react";
import img01 from "../../assets/img/images/Incript 06 Artboard 6.png";
import { Link } from "react-router-dom";
import ms from "../../assets/img/parceiros-redimensionadas/logo-ms.png";
import weria from "../../assets/img/parceiros-redimensionadas/Weria PNG 05 Artboard 6 Copy 3.png";
import newin from "../../assets/img/parceiros-redimensionadas/Logo_Newin_Preto (1).png";
import ares from "../../assets/img/parceiros-redimensionadas/ares_logo_preto-removebg-preview.png";
import bz from "../../assets/img/parceiros-redimensionadas/Bz__01_Artboard_498-removebg-preview.png";

const image = [

]
const partners_list = [
  { src: ms, title: "ms" },
  { src: weria, title: "weria" },
  { src: newin, title: "newin" },
  { src: ares, title: "ares" },
  { src: bz, title: "bztech" },
];

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
        <div className="sub-title-div">
          <span className="sub-title-about">Quem nós somos?</span>
        </div>      
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-img">
              <img src={img01} alt="logo-whoweare" />
            </div>
          </div>
          <div className="col-lg-6">            
            <div className="about-content">
              <div className="section-title mb-30">                
                <h2 className="title">
                  Uma <span>nova era</span> de mudanças!
                </h2>
              </div>
              <p>
                A empresa de desenvolvimento CIT se transformou em Incript!
                Nossa nova marca reflete nossa evolução, paixão pela inovação e
                compromisso em fornecer a melhor experiência aos clientes.
                Continuaremos entregando soluções de software personalizadas de
                alta qualidade para impulsionar o sucesso de nossos clientes.
              </p>
              <Link to="https://wa.me/+5561983463082" className="btn">
                Faça seu projeto conosco
              </Link>
            </div>
          </div>
        </div>
        <div className="partner-area-about">
            <div className="partners-whoweare">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="section-title text-center mb-10">
                    <span className="sub-title-partners">Nossos Parceiros</span>
                  </div>
                </div>
              </div>
              <div class="slider-partners">
                <div class="slide-track">
                  <div class="slide-partners">
                    <img
                      src= {ms}
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={weria}
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={newin}
                      // height="130"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src= {ares}
                      // height="90%"
                      width="60%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={bz}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src= {ms}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={weria}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={newin}
                      // height="130"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src= {ares}
                  // height="90"
                      width="60%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={bz}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src= {ms}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={weria}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={newin}
                      // height="130"
                      width="100%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src= {ares}
                  // height="90"
                      width="60%"
                      alt=""
                    />
                  </div>
                  <div class="slide-partners">
                    <img
                      src={bz}
                  // height="90"
                      width="100%"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
