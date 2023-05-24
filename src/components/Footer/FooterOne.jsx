import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/incript-logo.png";
import { scrollToTop } from "../../lib/helpers";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: "smooth" });
  }
};
const FooterOne = () => {
  return (
    <footer>
      <div className="footer-area">
        <div className="container">
          <div className="footer-scroll-wrap">
            <button
              className="scroll-to-target"
              data-target="html"
              onClick={scrollToTop}
            >
              <i className="fas fa-arrow-up"></i>
            </button>
          </div>
          <div className="footer-top">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <Link to="/" className="f-logo">
                    <img src={logoImage} alt="Incript Logo" />
                  </Link>
                  <div className="footer-content">
                    <p>
                      <span className="footer-titulo">Fábrica de Software</span><br/>
                      Construindo a tecnologia de amanhã, hoje!
                    </p>
                    <ul className="footer-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-5 col-sm-6">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <h4 className="fw-title">Links Utéis</h4>
                  <div className="footer-link">                  
                    <ul>
                      <li>
                        <Link to="/#about" onClick={() => handleScrollToSection("about")}>Sobre nós</Link>
                      </li>
                      <li>
                        <Link to="/#roadmap" onClick={() => handleScrollToSection("roadmap")}>Nossos precedentes</Link>
                      </li>
                      <li>
                        <Link to="/#faq"  onClick={() => handleScrollToSection("faq")}>Perguntas Frequentes</Link>
                      </li>
                      <li>
                        <Link to="/#contact" onClick={() => handleScrollToSection("contact")}>Contato</Link>
                      </li>          
                      
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <h4 className="fw-title">Serviços</h4>
                  <div className="footer-link">
                    <ul>
                      <li>
                        <Link to="/">Criação de Sites</Link>
                      </li>
                      <li>
                        <Link to="/">E-commerce</Link>
                      </li>
                      <li>
                        <Link to="/">Portais</Link>
                      </li>
                      <li>
                        <Link to="/">API's</Link>
                      </li>
                      <li>
                        <Link to="/">Sistemas</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div
                  className="footer-widget wow fadeInUp"
                  data-wow-delay=".8s"
                >
                  {/* <h4 className="fw-title">Subscribe Newsletter</h4>
                  <div className="footer-newsletter">
                    <p>
                      Exerci tation ullamcorper suscipit lobortis nisl aliquip
                      ex ea commodo
                    </p>
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Info@gmail.com"
                        required
                      />
                      <button type="submit">
                        <i className="fas fa-paper-plane"></i>
                      </button> 
                    </form> 
  </div> */ }
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="copyright-text">
                  <p>Copyright &copy; 2023. All Rights Reserved Incript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
