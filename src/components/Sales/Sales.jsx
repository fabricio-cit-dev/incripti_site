import React from "react";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import { nextImage } from "./slider-projects";
import aparty from "../../assets/img/projects/APARTY MOCKUP 2.png";
import Ares from "../../assets/img/projects/ares mockup sem fundo.png";
import ms from "../../assets/img/projects/mockup ms sem fundo.png";
import cl from "../../assets/img/projects/mockup tela sem fundo.png";

const Sales = () => {
  return (
    <section id="portfolio" className="chart-area chart-bg ">
      <div className="container">
        <div className="tab-content justify-content-center">
          <div class="col-lg-6">
            <div class="slider">
              <div class="slides">
                <input type="radio" name="radio-btn" id="radio1"></input>
                <input type="radio" name="radio-btn" id="radio2"></input>
                <input type="radio" name="radio-btn" id="radio3"></input>
                <input type="radio" name="radio-btn" id="radio4"></input>
                <div class="slide first">
                  <img src={Ares} alt="ares" />
                </div>
                <div class="slide">
                  <img src={ms} alt="ms-project" />
                </div>
                <div class="slide">
                  <img src={cl} alt="conta-legal" />
                </div>
                <div class="slide">
                  <img src={aparty} alt="aparty" />
                </div>
                <div class="navigation-auto">
                  <div class="auto-btn1"></div>
                  <div class="auto-btn2"></div>
                  <div class="auto-btn3"></div>
                  <div class="auto-btn4"></div>
                </div>
              </div>
              <div class="manual-navigation">
                <label htmlFor="radio1" class="manual-btn"></label>
                <label htmlFor="radio2" class="manual-btn"></label>
                <label htmlFor="radio3" class="manual-btn"></label>
                <label htmlFor="radio4" class="manual-btn"></label>
              </div>
            </div>
            <script src={nextImage}></script>
          </div>
          <div className="texto-projetos">
            <tr>Alguns de nossos projetos</tr> <br />
            <td>
              Estamos sempre à procura das melhores linguagens e frameworks a
              fim de oferecer o que há de melhor no mercado.
            </td>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;
