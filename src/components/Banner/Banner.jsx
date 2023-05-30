import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo/logo-redimensionada.png"

const handleScrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
  section.scrollIntoView({ behavior: "smooth" });
  }
};

const Banner = (props) => {
  return (
    <section id="banner" className="banner-area banner-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title">
              Nossa especialidade é <br/>transformar o <br/>seu <span>Negócio</span> 
              </h2>
              <div className="banner-button">
                <Link to="/#footer" onClick={() => handleScrollToSection("footer")}className="btn">
                  Faça seu projeto conosco
                </Link>
              </div>
              <img src={logo} className="logo-animation"></img>
              <div className="banner-line">
                <div className="line"></div>
                <Link to="/#about" onClick={() => handleScrollToSection("about")} className="read-more">
                  Leia mais
                </Link>
              </div>              
            </div>            
          </div>
        </div>        
      </div>
    </section>
  );
};

export default Banner;
