import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../../src/assets/img/logo/incript-logo.png";
import { scrollToTop } from "../../lib/helpers";
import FooterContact from "./FooterContacts";

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: "smooth" });
  }
};
const FooterOne = () => {
  return (
    <footer id="footer">
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
                      <span className="footer-titulo">Software's House</span><br/>
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
                    </ul>
                  </div>
                </div>
              </div>
              <div className="footer-contacts">
                <div
                  className="footer-widget  wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <FooterContact />                         
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
