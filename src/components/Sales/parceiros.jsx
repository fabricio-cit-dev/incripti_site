import React from "react";
import logoares from "../../assets/img/parceiros/AresLogo.png"
import newin from "../../assets/img/parceiros/Logo_Newin.png"
import msfintech from "../../assets/img/parceiros/logo-msfintech.png"
import weria from "../../assets/img/parceiros/Weria PNG 06 Artboard 6 Copy 4.png"
import { nextImage } from "./slider-projects";

const NossosParceiros = () => {
    return (
        <section id="partners" className="nossos-parceiros">
        <div className="parceiros-slider">
            <h2 className="parceiros">Nossos <span className="span-parceiros">Parceiros</span></h2>
            <div className="slider-parceiros">
              <br/>
              <div className="slides-parceiros">
                <input type="radio-parc" name="radio-parc-btn" id="radio5"></input>
                <input type="radio-parc" name="radio-parc-btn" id="radio6"></input>
                <input type="radio-parc" name="radio-parc-btn" id="radio7"></input>
                <input type="radio-parc" name="radio-parc-btn" id="radio8"></input>
                <div className="slide-parceiros">
                  <img src={logoares} alt="logo-ares" />
                </div>
                <div className="slide-parceiros">
                  <img src={newin} alt="newin" />
                </div>
                <div className="slide-parceiros">
                  <img src={msfintech} alt="msfintech" />
                </div>
                <div className="slide-parceiros">
                  <img src={weria} alt="weria" />
                </div>
                <div className="navigation-auto-parc">
                  <div className="auto-btn5"></div>
                  <div className="auto-btn6"></div>
                  <div className="auto-btn7"></div>
                  <div className="auto-btn8"></div>
                </div>
              </div>
              <div className="manual-navigation-parceiros">
                <label htmlFor="radio5" className="manual-parc-btn"></label>
                <label htmlFor="radio6" className="manual-parc-btn"></label>
                <label htmlFor="radio7" className="manual-parc-btn"></label>
                <label htmlFor="radio8" className="manual-parc-btn"></label>
              </div>
            </div>
            <script src={nextImage}></script>
          </div>
        </section>
    );
};

export default NossosParceiros;
