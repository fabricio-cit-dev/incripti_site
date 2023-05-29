import React from "react";

const FooterContact = () => {
  return (
    <>
      <div className="footer-contacts">
        <div className="email-contact">
          contato@citechnology.com.br
        </div>
        <div className="location-container">
          <div>
            <span className="location1">Brasília</span> <br /> <span className="phone-number">+55 (61) 98346-3082</span><br/>
            SHS Quadra 01, Bloco A, Lojas 09 e 10<br />Asa Sul, Brasília-DF <br />CEP:70322-900, BR        
          </div>
          <div>
            <span className="location2">Orlando</span> <br /><span className="phone-number">+55 (61) 98346-3082</span><br/>
            10690 Petrillo Way, Winter Garden <br/> Florida, USA | 34787          
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterContact;
