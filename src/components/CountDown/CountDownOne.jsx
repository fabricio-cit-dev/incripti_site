import React from "react";
import Countdown from "react-countdown";

const CountDownOne = () => {
  // Renderer callback with condition <i class="fa-solid fa-users"></i> <i class="fa-solid fa-code"></i> <i class="fa-solid fa-mug-saucer"></i> <i class="fa-solid fa-circle-check"></i>
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
      return (
        <>
          <div className="time-count day">
            
            <span>{"22+"}</span>Clientes Satisfeitos
          </div>
          <div className="time-count hour">
            
            <span>{"27k+"}</span>Linhas de código
          </div>
          <div className="time-count min">
            
            <span>{"154K+"}</span>Chícaras de café
          </div>
          <div className="time-count sec">
            
            <span>{"45+"}</span>Projetos entregues
          </div>
        </>
      );
  };

  return (
    <div className="coming-time">
      <Countdown date={Date.now() + 5000000} renderer={renderer} />
    </div>
  );
};

export default CountDownOne;
