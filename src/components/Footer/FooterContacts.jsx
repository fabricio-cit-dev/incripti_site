import React from "react";
import emailicon from "../../assets/img/footer/email-icon.svg"
import localiicon from "../../assets/img/footer/locali-icon.svg"

const FooterContact = () => {
  return (
    <>
      <div className="footer-contacts">
        <div className="email-contact">
          <img src={emailicon} alt="email-icon" className="emai-footer-icon"></img>
           contato@incript.com.br
        </div>
        <div className="location-container">
          <div>
            <img src={localiicon} alt="localização" className="locali-icon"></img>
            <span className="location1">Brasília</span> <br /> <span className="phone-number">+55 (61) 98346-3082</span><br/>
            SHS Quadra 01, Bloco A, Lojas 09 e 10<br />Asa Sul, Brasília-DF <br />CEP:70322-900, BR        
          </div>
          <div>
            <img src={localiicon} alt="localização" className="locali-icon"></img>
            <span className="location2">Orlando</span> <br /><span className="phone-number">+55 (61) 98346-3082</span><br/>
            10690 Petrillo Way, Winter Garden <br/> Florida, USA | 34787          
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
