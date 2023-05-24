import React from "react";
import CountDownOne from "../CountDown/CountDownOne";
import logo from "../../assets/img/logo/logo-redimensionada.png"

const Banner = (props) => {
  return (
    <section className="banner-area banner-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="banner-content text-center">
              <h2 className="title">
              Nossa especialidade é transformar o seu <span>negócio</span> 
              </h2>
              <img src={logo} className="logo-animation"></img>              
            </div>            
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="banner-countdown-wrap text-center">
              <br/>
              <h2 className="title">Nossos Números:</h2>

              <CountDownOne /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
