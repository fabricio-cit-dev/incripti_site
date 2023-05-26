import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import { nextImage } from "./slider-projects";
import aparty from "../../assets/img/projects/APARTY MOCKUP 2.png"
import Ares from "../../assets/img/projects/ares mockup sem fundo.png";
import ms from "../../assets/img/projects/mockup ms sem fundo.png";
import cl from "../../assets/img/projects/mockup tela sem fundo.png";

const Sales = () => {
  return (
    <section id="sales" className="chart-area chart-bg ">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6">
            <div className="chart-inner">
              <div
                className="chart-content wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <SalesTabButton
                    title="Cases"
                    className="active"
                    id="funding-tab"
                    target="#funding"
                    ariaControls="funding"
                    ariaSelected={true}
                  />
                </ul>

                <div className="tab-content" id="myTabContent">
                  <SalesTabContent
                    className={"show active"}
                    id="funding"
                    ariaLabel="funding-tab"
                    title="Alguns de nossos projetos"
                    description=" Estamos sempre a procura das melhores linguagens e frameworks afim de 
                    oferecer o que tem de melhor no mercado."
                    link="/#tecnologias"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="slider">
              <div className="slides">
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>
                <div className="slide first">
                  <img src={Ares} alt="ares" />
                </div>
                <div className="slide">
                  <img src={ms} alt="ms-project" />
                </div>
                <div className="slide">
                  <img src={cl} alt="conta-legal" />
                </div>
                <div className="slide">
                  <img src={aparty} alt="aparty" />
                </div>
                <div className="navigation-auto">
                  <div className="auto-btn1"></div>
                  <div className="auto-btn2"></div>
                  <div className="auto-btn3"></div>
                  <div className="auto-btn4"></div>
                </div>
              </div>
              <div className="manual-navigation">
                <label htmlFor="radio1" className="manual-btn"></label>
                <label htmlFor="radio2" className="manual-btn"></label>
                <label htmlFor="radio3" className="manual-btn"></label>
                <label htmlFor="radio4" className="manual-btn"></label>
              </div>
            </div>
            <script src={nextImage}></script>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
